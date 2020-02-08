export class Comment {

    username: String;
    commentText: String;
    datetime: String;
    vote: number;

    constructor(username: String, commentText: String, datetime: String, vote: number) {
        this.username = username;
        this.commentText = commentText;
        this.datetime = datetime;
        this.vote = vote;
    }

    largerThan(other: Comment) {
        // Need to compare other aspects in the future
        return this.vote > other.vote;
    }
}
