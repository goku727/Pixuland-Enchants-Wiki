import React from "react";
import Link from "next/link";

export default function Enchant({ category, slug, frontmatter }) {
    return (
        <div
            key={slug}
            className="group border border-gray-200 m-2 rounded-xl shadow-lg overflow-hidden flex flex-col"
        >
            <Link href={`/${category}/${slug}`}>
                <a>
                    <h1 className="p-4 group-hover:bg-green-800 group-hover:text-white">
                        {frontmatter.title}
                    </h1>
                </a>
            </Link>
        </div>
    );
}
