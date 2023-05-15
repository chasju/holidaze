import Card from "@/components/card/Card";

const CardsResult = ({ searchResults }) => {
  const results = searchResults.map((venue) => <Card key={venue.id} data={venue} />);
  const content = results?.length ? (
    results
  ) : (
    <p aria-label="No venues matches your search" className="bg-lighter text-primary fw-semibold text-center mt-3 p-3 rounded-1">
      No posts
    </p>
  );

  return content;
};

export default CardsResult;
