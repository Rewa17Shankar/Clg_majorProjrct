import { useEffect, useState } from "react";
import { addReview, getAllReviews } from "../../api/MANAGER/performanceApi";

export default function Performance() {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({
    user_id: "",
    reviewer_id: "", // manager id
    rating: "",
    feedback: "",
  });

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const data = await getAllReviews();
      setReviews(data);
    } catch (err) {
      console.error("Error fetching reviews:", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addReview(newReview);
      setNewReview({ user_id: "", reviewer_id: "", rating: "", feedback: "" });
      fetchReviews();
    } catch (err) {
      console.error("Error adding review:", err);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Performance Reviews</h2>

      {/* Add Review Form */}
      <form onSubmit={handleSubmit} className="mb-6 space-y-3">
        <input
          type="text"
          placeholder="Employee User ID"
          value={newReview.user_id}
          onChange={(e) =>
            setNewReview({ ...newReview, user_id: e.target.value })
          }
          className="border p-2 w-full"
        />
        <input
          type="text"
          placeholder="Reviewer ID (Manager)"
          value={newReview.reviewer_id}
          onChange={(e) =>
            setNewReview({ ...newReview, reviewer_id: e.target.value })
          }
          className="border p-2 w-full"
        />
        <input
          type="number"
          placeholder="Rating (1-5)"
          value={newReview.rating}
          onChange={(e) =>
            setNewReview({ ...newReview, rating: e.target.value })
          }
          className="border p-2 w-full"
        />
        <textarea
          placeholder="Feedback"
          value={newReview.feedback}
          onChange={(e) =>
            setNewReview({ ...newReview, feedback: e.target.value })
          }
          className="border p-2 w-full"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Submit Review
        </button>
      </form>

      {/* Reviews List */}
      <div>
        <h3 className="font-semibold mb-2">All Reviews</h3>
        <ul className="space-y-2">
          {reviews.map((r) => (
            <li key={r.id} className="border p-3 rounded">
              <p>
                <strong>Employee:</strong> {r.user?.username || r.user_id}
              </p>
              <p>
                <strong>Reviewer:</strong> {r.reviewer?.username || r.reviewer_id}
              </p>
              <p>
                <strong>Rating:</strong> {r.rating}
              </p>
              <p>
                <strong>Feedback:</strong> {r.feedback}
              </p>
              <p className="text-sm text-gray-500">
                {new Date(r.review_date).toLocaleDateString()}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
