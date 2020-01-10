"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const photon_1 = require("@prisma/photon");
const photon = new photon_1.Photon();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const user1 = yield photon.users.create({
            data: {
                email: 'alice@prisma.io',
                name: 'Alice',
                posts: {
                    create: {
                        title: 'Watch the talks from Prisma Day 2019',
                        content: 'https://www.prisma.io/blog/z11sg6ipb3i1/',
                        published: true,
                    },
                },
            },
            include: {
                posts: true,
            },
        });
        const user2 = yield photon.users.create({
            data: {
                email: 'bob@prisma.io',
                name: 'Bob',
                posts: {
                    create: [
                        {
                            title: 'Subscribe to GraphQL Weekly for community news',
                            content: 'https://graphqlweekly.com/',
                            published: true,
                        },
                        {
                            title: 'Follow Prisma on Twitter',
                            content: 'https://twitter.com/prisma/',
                            published: false,
                        },
                    ],
                },
            },
            include: {
                posts: true,
            },
        });
        console.log(`Created users: ${user1.name} (${user1.posts.length} post) and (${user2.posts.length} posts) `);
        const allPosts = yield photon.posts.findMany({
            where: { published: true },
        });
        console.log(`Retrieved all published posts: `, allPosts);
        const newPost = yield photon.posts.create({
            data: {
                title: 'Join the Prisma Slack community',
                content: 'http://slack.prisma.io',
                published: false,
                author: {
                    connect: {
                        email: 'alice@prisma.io',
                    },
                },
            },
        });
        console.log(`Created a new post: `, newPost);
        const updatedPost = yield photon.posts.update({
            where: {
                id: newPost.id,
            },
            data: {
                published: true,
            },
        });
        console.log(`Published the newly created post: `, updatedPost);
        const postsByUser = yield photon.users
            .findOne({
            where: {
                email: 'alice@prisma.io',
            },
        })
            .posts();
        console.log(`Retrieved all posts from a specific user: `, postsByUser);
    });
}
main()
    .catch(e => console.error(e))
    .finally(() => __awaiter(void 0, void 0, void 0, function* () {
    yield photon.disconnect();
}));
//# sourceMappingURL=script.js.map