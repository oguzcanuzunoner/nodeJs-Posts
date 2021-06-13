let posts = [{
    title: "Post Başlık 1",
    detail: "Post Detay 1",
    title: "Post Başlık 2",
    detail: "Post Detay 2",
    title: "Post Başlık 3",
    detail: "Post Detay 3",
    title: "Post Başlık 4",
    detail: "Post Detay 4",
}]


const listPost = () => {
    posts.map((post) => {
        console.log(post.title," ",posts.detail)
    });
};


const addData = newData => {
    const promise1 = new Promise((resolve, reject) => {
        posts.push(newData)
        resolve(posts)
        reject("Bir Hata Oldu")
    })
    return promise1
}

addData({ title: "Post Başlık 10", detail: "Post Detay 10" })
    .then(() => {
        console.log("yeni liste")
        listPost()
    })
    .catch((err) => { console.log(err) })