const DUMMY_THREADS = [
    {
        id: 't1',
        creator: 'u1',
        subject: 'A whole essay on why you should eat an apple a day',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tristique neque nec laoreet mollis. Suspendisse ac mollis ipsum. Vestibulum volutpat vel lorem quis lobortis. Praesent suscipit euismod est at efficitur. ',
        answers: [
            {
                answer: 'Literally no one gives a damn. I just ratioed your entire post.',
                creator: 'u3',
                upvotes: 5186,
                downvotes: 0,
            },
        ],
    },
    {
        id: 't2',
        creator: 'u2',
        subject: 'Bananas suck and here is why',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tristique neque nec laoreet mollis. Suspendisse ac mollis ipsum. Vestibulum volutpat vel lorem quis lobortis. Praesent suscipit euismod est at efficitur. ',
        answers: [],
    },
];

const GetThreads = () => {

    fetch('http://localhost:8080/api/threads/all')
    .then(response => {
        return response.join();
    })
    .catch((error) => {
        return DUMMY_THREADS;
      }
    )
};

export default GetThreads;
