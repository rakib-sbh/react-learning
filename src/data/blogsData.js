const generateBlogData = (topics) => {
  let blogsData = [];

  topics.forEach((topic, i) => {
    let blog = {
      id: i + 1,
      topic: topic,
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure explicabo saepe libero ratione ipsa, delectus assumenda, vero, voluptates aliquam quas repudiandae perferendis. Debitis harum voluptatum veritatis saepe quae ipsa quam inventore quia reprehenderit culpa non aperiam consequuntur consectetur officiis et asperiores blanditiis laborum nihil veniam sed ex, dolor rem commodi nisi. Dolore velit necessitatibus earum obcaecati iste, molestias quis. Quas, maxime possimus. Nobis expedita ullam ea dolores magnam quasi illo, voluptas vel. Ratione officia doloremque laudantium molestiae, dolores ab, cupiditate perferendis at amet ipsam aliquam eius commodi suscipit reiciendis dicta fugiat, consequuntur beatae dolor deleniti ipsum quia explicabo alias. Nesciunt.",
    };

    blogsData.push(blog);
  });

  return blogsData;
};

let blogsData = generateBlogData(["html", "css", "js", "react"]);

export default blogsData;
