//! Interface Segregation Principle

interface Printer {
  print(document: Document): void;
}

interface Scanner {
  scan(document: Document): void;
}

interface Fax {
  fax(document: Document): void;
}

class MultifunctionPrinter implements Printer, Scanner, Fax {
  print(document: Document): void {
    console.log("The Machine is printing");
  }
  scan(document: Document): void {
    console.log("The Machine is scanning");
  }
  fax(document: Document): void {
    console.log("The Machine is faxing");
  }
}

// Todo: Exercise
interface Post {
  title: string;
  content: string;
}

interface CreatePost {
  create(post: Post): void;
}

interface CommentingPost {
  update(post: string): void;
}

interface SharingPost {
  share(id: Post): void;
}

class Admin implements CommentingPost, SharingPost, CreatePost {
  update(post: string): void {
    console.log(`Successfully commenting post: ${post}`);
  }
  share(id: Post): void {
    console.log(`Successfully sharing post with id: ${id.title}`);
  }
  create(post: Post): void {
    console.log(`Successfully creating post: ${post.title}`);
  }
}

class Regular implements CommentingPost, SharingPost {
  update(post: string): void {
    console.log(`Successfully commenting post: ${post}`);
  }
  share(id: Post): void {
    console.log(`Successfully sharing post with id: ${id.title}`);
  }
}
