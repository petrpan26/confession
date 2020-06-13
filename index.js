const {Firestore} = require('@google-cloud/firestore');

const firestore = new Firestore();

exports.create = (request, response) => {
  tag = request.body.tag;
  content = request.body.content;
  const postsCol = firestore.collection('tags').doc(tag).collection('posts');
  postsCol.add({
    content: content,
    created_at: new Date(),
    like_count: 0
  }).catch((error) => {
    response.status(500).send(error);
  }).then((data) => {
    response.status(200).send("OK");
  });
};
  
exports.test = (request, response) => {
    response.status(200).send("OK");
  };
    