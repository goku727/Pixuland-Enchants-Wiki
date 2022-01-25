import React from "react";
import EnchantsLayout from "../../components/EnchantsLayout";
import fs from "fs";
import matter from "gray-matter";
import Enchant from "../../components/Enchant";

export async function getStaticProps() {
    const files = fs.readdirSync("enchants/artifact");

    const enchants = files.map((fileName) => {
        const slug = fileName.replace(".md", "");
        const readFile = fs.readFileSync(
            `enchants/artifact/${fileName}`,
            "utf-8"
        );
        const { data: frontmatter } = matter(readFile);
        return {
            slug,
            frontmatter,
        };
    });

    return {
        props: {
            enchants,
        },
    };
}

export default function Artifacts({ enchants }) {
    return (
        <EnchantsLayout description="Aplica detalles visuales al item que lo tenga.">
            {enchants.map(({ slug, frontmatter }) => (
                <Enchant
                    key={slug}
                    category="artifacts"
                    slug={slug}
                    frontmatter={frontmatter}
                ></Enchant>
            ))}
        </EnchantsLayout>
    );
}
