export default function ConsistentHashing({ blog }: any) {
    return (
        <div className='bg-two h-full w-full p-4 text-justify'>
            <div className='flex flex-row justify-between'>
                <p className='md:text-lg text-md font-semibold font-mono text-[#ffba92] w-fit'>
                    {blog.category}
                </p>
                <p className='md:text-lg text-md font-semibold font-mono text-[#ffba92] w-fit'>
                    {blog.date}
                </p>
            </div>
            <h1 className='md:text-3xl text-2xl w-full text-center text-three font-bold'>
                {blog.title}
            </h1>
            <div className='mt-3 p-2'>
                <p className='md:text-md text-md text-white font-serif'>
                    This blog discusses in depth about one
                    of the pillars of distributed systems,
                    Consistent Hashing. This is a technique
                    to store data across multiple nodes and
                    redistribute efficiently when a node is
                    added or removed. In this blog, I will
                    be discussing about the what, why and
                    how of consistent hashing. Let&apos;s
                    get started!
                </p>
                <div>
                    <h2 className='md:text-xxl text-lg text-three font-bold mt-4'>
                        Hashing
                    </h2>
                    <p className='md:text-md text-md text-white font-serif'>
                        Before we dive into consistent
                        hashing, let us first understand
                        what is hashing and storing data
                        using hashing. Hashing is a
                        technique to store data in a way
                        that it can be retrieved in{" "}
                        <span className='italic'>O(1)</span>{" "}
                        time. This is done by converting the
                        data into a hash value using a hash
                        function. We take a mod of this hash
                        value with the size of array to get
                        an index and store data at that
                        index. This is how data is stored in
                        a hash table.
                    </p>
                    <p className='md:text-md text-md text-white font-serif'>
                        Different values can have same hash
                        values when passed through some hash
                        function. This can lead to
                        collisions as one value already
                        placed at some index, and another
                        value is required to be placed at
                        the same index. In order to handle
                        collisions, a technique of chaining
                        is used in which nodes at same index
                        stored like a linked list and then
                        linearly searched to find the
                        required value.
                    </p>
                </div>
                <div>
                    <h2 className='md:text-xxl text-lg text-three font-bold mt-4'>
                        Why not hashing in distributed
                        systems?
                    </h2>
                    <p className='md:text-md text-md text-white font-serif'>
                        Distributed system means that data
                        is stored across multiple nodes.
                        There can be various reasons for
                        this. Now when we have some data to
                        store, first we need to find which
                        node to store this data. This can be
                        done by hashing the data and then
                        taking mod with the number of nodes.
                        Thus while retrieving the data, we
                        need to hash the data again and then
                        find the node where this data is
                        stored.
                    </p>
                    <p className='md:text-md text-md text-white font-serif'>
                        This approach is fine until we have
                        a fixed number of nodes. But what if
                        some node fails, or we need to put
                        in extra storage. In this case, the
                        number of nodes will change and thus
                        the hash value will change. This
                        will lead to redistribution of data
                        across all the nodes. For instance,
                        in Java HashMap, when the number of
                        elements exceeds a certain
                        threshold, a new array of double
                        size is created and all the elements
                        are rehashed and stored in the new
                        array. This is a very costly
                        operation and can lead to a lot of
                        time wastage.
                    </p>
                    <p className='md:text-md text-md text-white font-serif'>
                        For this reason, normal hashing is
                        very inefficient in distributed
                        systems. This is where consistent
                        hashing comes into play.
                    </p>
                </div>
                <div>
                    <h2 className='md:text-xxl text-lg text-three font-bold mt-4'>
                        What is Consistent Hashing?
                    </h2>
                    <p className='md:text-md text-md text-white font-serif'>
                        Consistent Hashing allows us to
                        minimize the number of keys that
                        need to be remapped whenever a new
                        node is added or any node is
                        removed. Let&apos;s build upon this
                        solution by starting with our
                        problem statement.
                    </p>
                    <p className='md:text-md text-md text-white font-serif'>
                        The initial idea is to place the
                        nodes(servers) on a ring. Now
                        whenever a key is to be stored, we
                        hash the key, and search for the
                        node which is closest to this hash
                        value in clockwise direction. We
                        store this key and the associated
                        data at this node. Now when we want
                        to retrieve this data, we hash the
                        key and search for the node which is
                        closest to this hash value in
                        clockwise direction.
                    </p>
                </div>
                <div>
                    <h2 className='md:text-xxl text-lg text-three font-bold mt-4'>
                        Addition and Removal handling?
                    </h2>
                    <p className='md:text-md text-md text-white font-serif'>
                        So we have already discussed how
                        data is stored and retrieved using
                        consistent hashing. Now let&apos;s
                        discuss how removal and addition of
                        nodes are handled in consistent
                        hashing.
                    </p>
                    <p className='md:text-md text-md text-white font-serif'>
                        When a new node is added, we hash
                        the node and place it on the ring.
                        Now we need to redistribute the keys
                        which were previously stored at some
                        other node. This other node is
                        always the one which is closest to
                        the new node in clockwise direction.
                        We now need to redistribute keys
                        which were previously stored at this
                        node and have hash value less than
                        the new node. This is because the
                        new node is closest to these keys in
                        clockwise direction. Thus we
                        redistribute these keys to the new
                        node. Similarly when a node is
                        removed, we redistribute the keys
                        which were previously stored at the
                        removed node to the next node in
                        clockwise direction.
                    </p>
                    <p className='md:text-md text-md text-white font-serif'>
                        Here is the{" "}
                        <span className='italic'>Math</span>{" "}
                        for the claim why this method is
                        better. Let&apos;s say we have{" "}
                        <span className='italic'>n</span>{" "}
                        keys and{" "}
                        <span className='italic'>m</span>{" "}
                        nodes. So each node stores{" "}
                        <span className='italic'>n/m</span>{" "}
                        keys on average. Now when a node is
                        added or removed, only{" "}
                        <span className='italic'>n/m</span>{" "}
                        keys need to be redistributed. Thus
                        the cost of redistribution is{" "}
                        <span className='italic'>
                            O(n/m)
                        </span>
                        . This is a very efficient method as
                        compared to normal hashing where all
                        the keys need to be redistributed.
                    </p>
                </div>
                <div>
                    <h2 className='md:text-xxl text-lg text-three font-bold mt-4'>
                        Skewed?
                    </h2>
                    <p className='md:text-md text-md text-white font-serif'>
                        You should have thought about this
                        after reading the last section. If
                        not, then don&apos;t worry, I have
                        and I also studied the solution to
                        this problem. The problem is that
                        the nodes can be placed too close
                        thus not evenly placed on the ring
                        and causing the data to be
                        overloaded on some node. This is a
                        problem as the cost of
                        redistribution will be very high in
                        this case.
                    </p>
                    <p className='md:text-md text-md text-white font-serif'>
                        In order to solve this problem, we
                        can use{" "}
                        <span className='italic'>
                            Virtual Nodes
                        </span>
                        . Virtual nodes are replicas of the
                        actual nodes. Thus when a node is
                        added, we add multiple virtual nodes
                        for this node on the ring. This will
                        lead to even distribution of nodes
                        on the ring and thus even
                        distribution of data. This will lead
                        to the efficient redistribution of
                        keys when a node is added or
                        removed.
                    </p>
                    <p className='md:text-md text-md text-white font-serif'>
                        Point to be noted that these virtual
                        replicas themselves do not store
                        anything. They are just used to
                        distribute the data evenly across
                        the nodes.
                    </p>
                </div>
                <div>
                    <h2 className='md:text-xxl text-lg text-three font-bold mt-4'>
                        Implementation Points?
                    </h2>
                    <p className='md:text-md text-md text-white font-serif'>
                        The implementation of consistent
                        hashing requires some special data
                        structures. First problem is to find
                        next node in clockwise direction.
                        This can be achieved by using the
                        ceil function in a binary tree. So
                        we can use a binary search tree, but
                        again the problem is that the binary
                        search tree can be skewed so we use
                        a red-black tree. This will lead to
                        a balanced binary search tree and
                        thus efficient search for the next
                        node in{" "}
                        <span className='italic'>
                            O(log(n))
                        </span>{" "}
                        time.
                    </p>
                    <p className='md:text-md text-md text-white font-serif'>
                        You can find my implementation of
                        consistent hashing{" "}
                        <a className="hover:underline text-three font-semibold" href='https://github.com/Arya-veer/SystemDesign/tree/master/consistent_hashing'>
                            here
                        </a>
                        .
                    </p>
                </div>
                <p className='md:text-lg text-lg text-white font-serif border-t-2 border-[#ffba92] mt-4 pt-4'>
                    Let me know your thoughts on this blog
                    in the comments below. Also, if you have
                    any suggestions for future blogs, feel
                    free to comment them below. Next blog
                    will be on URL shortner. Stay tuned!
                </p>
            </div>
        </div>
    );
}
