import fastify from 'fastify'

const HW = fastify({
  logger: true
})


HW.route({
  method:"GET",
  url:'/user',
  handler:async(request, reply:any) => {
    let usersData: string[] = ["Ali", "Nouf","Reem","Shruq","Arije","Fatimah","Hadi","sars's",];
    reply.send(usersData)
  }
})
  
  // Declare a route
  // HW.get('/user', function (request, reply:any) {
  //   // returns users' data as an array

  //   let usersData: string[] = ["Ali", "Nouf","Reem","Shruq","Arije","Fatimah","Hadi","sars's",];
  //   reply.send(usersData)
  // })




  HW.get('/profile/ali', function (request, reply:any) {
    // return an object for Ali's profile
   const Ali={
     Fname:"Ali",
     Lname:"librhim",
     postion:"Assistant Lecturer ",
     age:"25",
}
   reply.send(Ali)
  })



  HW.get('/posts', function (request,reply:any) {
    // return an array of Instagram posts objects
    let posts: {name: string, photo: string, likes: number}[] = [
      {"name": "John", "photo": "floer", "likes": 20},
      {"name": "Carter", "photo": "ros", "likes": 18}
     
      ];
     

    reply.send(posts )
  })



  // Run the server!
  HW.listen({ port: 3000}, function (err:any, address) {
    if (err) {
     HW.log.error(err)
      process.exit(1)
    }
    // Server is now listening on ${address}
  })