import { FaRegBookmark, FaShareAlt, FaStar, FaEye } from "react-icons/fa";
import { format } from "date-fns";

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    thumbnail_url,
    details,
    rating,
    total_view,
    tags,
  } = news;

  return (
    <div className="card bg-base-200 shadow-md rounded-xl overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center gap-3">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="font-semibold text-sm">{author?.name}</h2>
            <p className="text-xs text-gray-500">
              {format(new Date(author?.published_date), "yyyy-MM-dd")}
            </p>
          </div>
        </div>

        <div className="flex gap-2 text-gray-500 text-lg">
          <FaRegBookmark className="cursor-pointer hover:text-primary" />
          <FaShareAlt className="cursor-pointer hover:text-primary" />
        </div>
      </div>

      {/* Title */}
      <h3 className="px-4 font-bold text-lg text-gray-800 leading-snug">
        {title}
      </h3>

      {/* Image */}
      <figure className="px-4 mt-3">
        <img
          src={thumbnail_url}
          alt={title}
          className="rounded-xl w-full object-cover"
        />
      </figure>

      {/* Details */}
      <div className="p-4 text-sm text-gray-600">
        <p>
          {details.slice(0, 180)}...
          <span className="text-primary cursor-pointer font-medium ml-1">
            Read More
          </span>
        </p>

        {/* Tags */}
        <div className="mt-2 text-xs text-gray-400">
          Tags:{" "}
          {tags.map((tag, i) => (
            <span key={i} className="text-gray-600">
              {tag}
              {i < tags.length - 1 && ", "}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="px-4 py-3 flex justify-between items-center border-t text-sm">
        <div className="flex items-center gap-1 text-warning">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={i < rating.number ? "text-orange-400" : "text-gray-300"}
            />
          ))}
          <span className="text-gray-700 ml-1">{rating.number.toFixed(1)}</span>
        </div>

        <div className="flex items-center gap-1 text-gray-500">
          <FaEye /> <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;