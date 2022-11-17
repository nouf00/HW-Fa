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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const HW = (0, fastify_1.default)({
    logger: true
});
HW.route({
    method: "GET",
    url: '/user',
    handler: (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
        let usersData = ["Ali", "Nouf", "Reem", "Shruq", "Arije", "Fatimah", "Hadi", "sars's",];
        reply.send(usersData);
    })
});
// Declare a route
// HW.get('/user', function (request, reply:any) {
//   // returns users' data as an array
//   let usersData: string[] = ["Ali", "Nouf","Reem","Shruq","Arije","Fatimah","Hadi","sars's",];
//   reply.send(usersData)
// })
HW.get('/profile/ali', function (request, reply) {
    // return an object for Ali's profile
    const Ali = {
        Fname: "Ali",
        Lname: "librhim",
        postion: "Assistant Lecturer ",
        age: "25",
    };
    reply.send(Ali);
});
HW.get('/posts', function (request, reply) {
    // return an array of Instagram posts objects
    let posts = [
        { "name": "John", "photo": "floer", "likes": 20 },
        { "name": "Carter", "photo": "ros", "likes": 18 }
    ];
    reply.send(posts);
});
// Run the server!
HW.listen({ port: 3000 }, function (err, address) {
    if (err) {
        HW.log.error(err);
        process.exit(1);
    }
    // Server is now listening on ${address}
});
