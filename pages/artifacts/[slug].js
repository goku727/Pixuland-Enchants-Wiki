import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";
import EnchantInfo from "../../components/EnchantInfo";

export async function getStaticPaths() {
    const files = fs.readdirSync("enchants/artifact/");
    const paths = files.map((fileName) => ({
        params: {
            slug: fileName.replace(".md", ""),
        },
    }));
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params: { slug } }) {
    const fileName = fs.readFileSync(`enchants/artifact/${slug}.md`, "utf-8");
    const { data: frontmatter, content } = matter(fileName);
    return {
        props: {
            frontmatter,
            content,
        },
    };
}

export default function EnchantPage({ frontmatter, content }) {
    return <EnchantInfo category="artifacts" content={content} />;
}
