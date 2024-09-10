console.group("excercise 1");
class Subject {
    constructor() {
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }

    notifyObservers() {
        this.observers.forEach(observer => observer.update());
    }
}

class Observer {
    update() {
        console.log('Observer updated!');
    }
}

// Instantiate the Subject
const subject = new Subject();

// Add multiple observers
const observer1 = new Observer();
const observer2 = new Observer();
const observer3 = new Observer();

subject.addObserver(observer1);
subject.addObserver(observer2);
subject.addObserver(observer3);

// Call notifyObservers
subject.notifyObservers();

console.groupEnd();

console.group("excercise 2");

const person = {
    name: 'John',
    age: 30,
    address: {
        city: 'New York',
        country: 'USA',
    },
};

const { address: { city, country } } = person;

const { name, age } = person;

console.log(name + " " + age);
console.log(city + " " + country);



const fruits = ['apple', 'banana', 'cherry', 'date'];

const [first, second, third, fourth] = fruits;

console.log(second + " " + fourth);
console.log(first + " " + third);
console.log(second + " " + third);

console.groupEnd();

console.group("excercise 3");


async function fetchPosts() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
        const posts = await response.json();
        console.log(posts);
    } catch (error) {
        console.error("Error fetching posts:", error.message);
    }
}


fetchPosts();


console.groupEnd();


console.group("excercise 4");
//! some names have been changed due to Excercise 1 for Excercise 4 to function
class DataFetcher {
    constructor() {
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }

    async fetchAndNotify() {
        const url = 'https://jsonplaceholder.typicode.com/posts?_limit=10';

        try {
            const response = await fetch(url);
            const data = await response.json();

            // Notify each observer with the fetched data
            for (const observer of this.observers) {
                observer.update(data);
            }
        } catch (error) {
            console.error("Error fetching data:", error.message);
        }
    }
}

class DataSubscriber {
    update(data) {
        try {
            console.log("Received updated data:", data);
            // Process the updated data as needed
        } catch (error) {
            console.error("Error processing updated data:", error.message);
        }
    }
}

const dataFetcher = new DataFetcher();
const dataSubscriber = new DataSubscriber();

dataFetcher.addObserver(dataSubscriber);
dataFetcher.fetchAndNotify();

console.groupEnd();
