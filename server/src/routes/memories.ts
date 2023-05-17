/* eslint-disable prettier/prettier */
import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../lib/prisma";

export async function memoriesRoutes(app: FastifyInstance) {
	app.get("/memories", async () => {
		const memories = await prisma.memory.findMany({
			orderBy: {
				createdAt: "asc", // mais antiga pra mais nova
			},
		});
		return memories.map((memory) => {
			return {
				id: memory.id,
				coverUrl: memory.coverUrl,
				excerpt: memory.content.substring(0, 115).concat("..."),
			};
		});
	});
	app.get("/memories/:id", async (request) => {
		// Validacao ID = String
		const paramSchema = z.object({
			id: z.string().uuid(),
		});
		const { id } = paramSchema.parse(request.params);

		const memory = await prisma.memory.findUniqueOrThrow({
			where: {
				id,
			},
		});
		return memory;
	});
	app.post("/memories", async (request) => {
		const bodySchema = z.object({
			content: z.string(),
			coverUrl: z.string(),
			isPublic: z.coerce.boolean().default(false),
		});

		const { content, isPublic, coverUrl } = bodySchema.parse(request.body);

		const memory = await prisma.memory.create({
			data: {
				content,
				coverUrl,
				isPublic,
				userId: "b07d1c7c-5df7-4eca-9578-3c61c63387df",
			},
		});
		return memory;
	});
	app.put("/memories/:id", async (request) => {
		const paramSchema = z.object({
			id: z.string().uuid(),
		});
		const { id } = paramSchema.parse(request.params);
		const bodySchema = z.object({
			content: z.string(),
			coverUrl: z.string(),
			isPublic: z.coerce.boolean().default(false),
		});
		const { content, isPublic, coverUrl } = bodySchema.parse(request.body);

		const memory = await prisma.memory.update({
			where: {
				id,
			},
			data: {
				content,
				coverUrl,
				isPublic,
			},
		});
		return memory;
	});

	app.delete("/memories/:id", async (request) => {
		const paramSchema = z.object({
			id: z.string().uuid(),
		});
		const { id } = paramSchema.parse(request.params);

		await prisma.memory.findUniqueOrThrow({
			where: {
				id,
			},
		});
	});
}
