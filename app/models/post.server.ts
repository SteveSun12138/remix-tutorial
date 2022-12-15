import { prisma } from "~/db.server";

export async function getPosts() {
  return prisma.post.findMany();
}

type Post = {
    slug: string;
    title: string;
};

export async function getPost(slug: string) {
    return prisma.post.findUnique({ where: { slug } });
}