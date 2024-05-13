export type Image = {
    source: string,
    alt: string
}

export type User = {
    username: string,
    profilePic: Image,
}
export type PostType = {
    title: string,
    body: string,
    votes: number,
    user: User
    images: Image[]
}