import { Course } from "@/types";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {
  course: Course;
};

export default function CourseCard({ course }: Props) {
  return (
    <Link
      href={`/courses/${course.id}`}
      className="block"
      data-cy="course-card"
    >
      <motion.div
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 120, damping: 10 }}
        className="border border-gray-200 dark:border-gray-700 rounded-2xl p-5 shadow-md bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
      >
        <h2
          className="text-lg font-bold text-gray-800 dark:text-white mb-2 line-clamp-2"
          data-cy="course-title"
        >
          {course.title}
        </h2>

        <p
          className="text-gray-500 dark:text-gray-300 text-sm mb-4 line-clamp-3"
          data-cy="course-short_description"
        >
          {course.short_description}
        </p>

        <div className="flex justify-between items-center text-xs font-medium">
          <span
            className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full"
            data-cy="course-category"
          >
            {course.category}
          </span>
          <span
            className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-3 py-1 rounded-full capitalize"
            data-cy="course-level"
          >
            {course.level}
          </span>
        </div>
      </motion.div>
    </Link>
  );
}
