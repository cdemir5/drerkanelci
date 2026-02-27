export interface GoogleReview {
  name: string;
  text: string;
  rating: number;
  timeAgo: string;
}

export interface GooglePlaceData {
  rating: number;
  totalReviews: number;
  reviews: GoogleReview[];
}

export async function fetchGoogleReviews(): Promise<GooglePlaceData | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return null;
  }

  try {
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,user_ratings_total,reviews&reviews_sort=newest&language=tr&key=${apiKey}`,
      { next: { revalidate: 86400 } } // 24 saat cache
    );

    if (!res.ok) return null;

    const data = await res.json();

    if (data.status !== "OK" || !data.result?.reviews) {
      return null;
    }

    const reviews: GoogleReview[] = data.result.reviews.map(
      (r: {
        author_name: string;
        text: string;
        rating: number;
        relative_time_description: string;
      }) => ({
        name: r.author_name,
        text:
          r.text.length > 400
            ? r.text.substring(0, 400).replace(/\s+\S*$/, "") + "..."
            : r.text,
        rating: r.rating,
        timeAgo: r.relative_time_description,
      })
    );

    return {
      rating: data.result.rating,
      totalReviews: data.result.user_ratings_total,
      reviews,
    };
  } catch {
    return null;
  }
}
