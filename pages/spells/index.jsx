import React from "react";
import EnchantsLayout from "../../components/EnchantsLayout";
import fs from "fs";
import matter from "gray-matter";
import Enchant from "../../components/Enchant";

export async function getStaticProps() {
    const files = fs.readdirSync("enchants/spell");

    const enchants = files.map((fileName) => {
        const slug = fileName.replace(".md", "");
        const readFile = fs.readFileSync(`enchants/spell/${fileName}`, "utf-8");
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

export default function Spells({ enchants }) {
    return (
        <EnchantsLayout description="Encantamientos activables.">
            {enchants.map(({ slug, frontmatter }) => (
                <Enchant
                    key={slug}
                    category="spells"
                    slug={slug}
                    frontmatter={frontmatter}
                ></Enchant>
            ))}
        </EnchantsLayout>
    );
}
