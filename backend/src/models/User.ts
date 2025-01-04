export class User {
    private friendsList : Set<string>;
    private userId : string;
    private userName : string;
    private userPassword : string;

    constructor(
        userId : string, 
        userName : string, 
        userPassword : string
    ) {
        this.userId = userId;
        this.userName = userName;
        this.userPassword = userPassword;
        this.friendsList = new Set();
    }

    addFriend(userId : string) {
        if(this.friendsList.has(userId)) {
            console.log("friends list already has user id");
        }
        else {
            this.friendsList.add(userId);
        }
    }
}