function solution(command) {
    if (command === 'upvote') {
        this.upvotes++;
        return;
    }

    if (command === 'downvote') {
        this.downvotes++;
        return;
    }

    let upvotes = this.upvotes;
    let downvotes = this.downvotes;
    let total = upvotes + downvotes;
    let balance = upvotes - downvotes;

    if (total > 50) {
        let extra = Math.ceil(Math.max(upvotes, downvotes) * 0.25);
        upvotes += extra;
        downvotes += extra;
    }

    let rating = 'new';
    if (total < 10) {
        rating = 'new';
    } else if (this.upvotes / total > 0.66) {
        rating = 'hot';
    } else if (balance >= 0 && total > 100) {
        rating = 'controversial';
    } else if (balance < 0) {
        rating = 'unpopular';
    }

    return [upvotes, downvotes, balance, rating];
}