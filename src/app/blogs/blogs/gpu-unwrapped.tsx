/*

*/

import Image from "next/image";
import MultilineCodeSnippet from "../components/code-snippet";

export default function GPUExplained({ blog }: any) {
    return (
        <div className="bg-two h-full w-full p-4 text-justify">
            <div className="flex flex-row justify-between">
                <p className="md:text-lg text-md font-semibold font-mono text-[#ffba92] w-fit">
                    {blog.category}
                </p>
                <p className="md:text-lg text-md font-semibold font-mono text-[#ffba92] w-fit">
                    {blog.date}
                </p>
            </div>
            <h1 className="md:text-3xl text-2xl w-full text-center text-three font-bold">
                {blog.title}
            </h1>
            <div className="mt-3 p-2">
                <p className="md:text-md text-md text-white font-serif">
                    AI is everywhere today - new models, massive training runs,
                    and GPUs constantly in the news. NVIDIA dominates headlines,
                    CUDA shows up in every job description, and GPUs seem to
                    power everything. Yet most explanations stop at “GPUs are
                    faster” or “they have more cores.” Even among engineers, the
                    why is often missing. GPUs didn&apos;t suddenly become
                    relevant, and AI didn&apos;t randomly choose them. This blog
                    connects computer architecture fundamentals to the GPU
                    designs driving the AI era - no hype, just clarity.
                </p>
                <p className="md:text-md text-md text-white font-serif mt-2">
                    This blog will start with a very quick revision of CPU
                    architecture, touch upon the fact that CPUs are designed for
                    latency and what architectural decisions make them efficient
                    for this purpose. Then we will understand the problems that
                    we solve using GPUs and why CPUs are not efficient for these
                    problems. Following this we will explore what GPUs are, how
                    are they architected, and what makes them efficient for the
                    problems we solve using them. Here I will try to keep the
                    explanations simple and intuitive, but will also add some
                    terms for general awareness. We will also understand some of
                    the trade-offs that are made in GPU architecture and most
                    importantly why are these actualy trade-offs. Finally we
                    will briefly look at modern GPUs - This is just a fact
                    section and could be used to flex some GPU knowledge.
                </p>
                <div>
                    <h2 className="md:text-xxl text-lg text-three font-bold mt-4">
                        Quick CPU Architecture Revision
                    </h2>
                    <p className="md:text-md text-md text-white font-serif">
                        In its simplest form, a CPU can be imagined as executing
                        one instruction at a time, start to finish, within a
                        single clock cycle. It fetches an instruction from
                        memory using a program counter, decodes it to understand
                        what action is required, executes the operation using
                        its arithmetic logic unit (ALU), accesses memory if
                        needed, and writes the result back to a register and
                        memory if needed. This cycle then repeats for the next
                        instruction.
                    </p>
                    <p className="md:text-md text-md text-white font-serif mt-2">
                        This single-cycle design is easy to reason about but
                        deeply inefficient in practice, because every
                        instruction is forced to wait for the slowest possible
                        operation to complete. Multi-cycle designs improve on
                        this by breaking instruction execution into smaller
                        steps - fetching, decoding, executing, accessing memory,
                        and writing results back - and spreading them across
                        multiple cycles. This allows the same hardware blocks,
                        such as the ALU or memory interface, to be reused over
                        time, improving efficiency without changing the
                        fundamental execution model.
                    </p>
                    <p className="md:text-md text-md text-white font-serif mt-2">
                        The real performance leap comes with pipelining. Instead
                        of treating instructions as isolated units, pipelining
                        treats execution like an assembly line. While one
                        instruction is being executed, another can be decoded,
                        and a third can be fetched. This overlap increases
                        instruction throughput significantly, but it also
                        introduces new challenges. Instructions may depend on
                        the results of earlier ones, or branches may change the
                        flow of execution, requiring the pipeline to pause or
                        flush. This is known as stailling, and modern CPUs
                        employ various techniques like branch prediction and
                        out-of-order execution to mitigate these issues and keep
                        the pipeline as full as possible.
                    </p>
                </div>
                <div>
                    <h2 className="md:text-xxl text-lg text-three font-bold mt-4">
                        How modern CPUs decreased latency by reducing stalling?
                    </h2>
                    <p className="md:text-md text-md text-white font-serif">
                        Modern CPUs are optimized for single-thread latency and
                        unpredictability. That leads to very specific hardware
                        decisions:
                    </p>
                    <ul className="md:text-md text-md text-white font-serif list-disc pl-6 mt-2">
                        <li>
                            <strong>
                                Wide, complex control logic per core:{" "}
                            </strong>{" "}
                            Each CPU core contains Branch predictors (You might
                            remember them from your comp arch. classes), out of
                            order schedulers, reorder buffers (Basically if an
                            instruction is stalled, we can execute other
                            independent instructions and store the current
                            state), register renaming logic (To avoid false
                            dependencies) coupled with dependency tracking
                            logic, speculatoin and rollback logic etc. This
                            logic exists to handle following code like
                            scenarios:
                            <MultilineCodeSnippet
                                code={`if (x > y) a = b + c;
else a = d * e;`}
                            />
                            Thus here the CPU&apos;s power and silicon is used
                            for decision making.
                        </li>
                        <li>
                            <strong>Low Latency Memory Access Model: </strong>{" "}
                            CPU memory is build around small, very fast caches
                            with coherence protocols in place with even
                            fine-grained load/ store operations. This is because
                            CPU workloads are unpredictable and have low spatial
                            and temporal locality.
                        </li>
                        <li>
                            <strong>Strong Sequential Guarantees: </strong> CPUs
                            respect strong memory ordering and correct program
                            order at retirement. Thus they use reorder buffers
                            and serialization logic which although ensures order
                            but adds to complexity and latency.
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="md:text-xxl text-lg text-three font-bold mt-4">
                        The problems CPUs lag at? - Data Parallel Problems
                    </h2>
                    <p className="md:text-md text-md text-white font-serif">
                        Imagine you have two vectors, A and B - both containing
                        a million entries each. You want to compute a new vector
                        C, where each entry C[i] is the sum of A[i] and B[i]. In
                        code, this looks like:
                        <MultilineCodeSnippet
                            code={`for (int i = 0; i < 1000000; i++) { C[i] = A[i] + B[i]; }`}
                        />
                        If we carefully analyze this, we have a single operation
                        - Addition, which is applied repeatedly over different
                        data points. Each addition is independent of the others.
                    </p>
                    <p className="md:text-md text-md text-white font-serif">
                        Now just for a moment, recall that few years back we
                        used to compare GPUs for gaming performance. This is
                        becuase such computations are very common in graphics
                        rendering - where each pixel's color can be computed
                        independently based on textures, lighting, etc. The
                        physics simulations ,where each object's state is
                        updated based on forces acting on it, also follow
                        similar patterns. {"\n"}
                        In today&apos;s world, LLMs are household names. They
                        are trained by performing Linear Algebra operations
                        (mainly matrix multiplications) on large datasets.
                        Matrix multiplications are similar problem which we
                        discussed above - applying the same operation
                        (multiplication and addition) across large sets of data
                        points.
                        {"\n"}
                        We call such problems as{" "}
                        <strong>"Data Parallel"</strong> problems - where same
                        operation is applied across large datasets with no or
                        minimal dependencies.
                    </p>
                </div>
                <div>
                    <h2 className="md:text-xxl text-lg text-three font-bold mt-4">
                        Why CPUs are not efficient for Data Parallel Problems?
                    </h2>
                    <p className="md:text-md text-md text-white font-serif">
                        Recall that we designed CPUs to minimize latency for
                        single-threaded workloads i.e. program flows instruction
                        by instruction. In such scenarios, where each
                        instruction could depend on the result of the previous
                        one, and the sequence of operations could be
                        unpredictable, the control logic had to be complex and
                        wide. This complexity is overkill for data-parallel
                        tasks, where operations are uniform and independent.
                        {"\n"}
                        Take our vector addition example.
                        <MultilineCodeSnippet
                            code={`for (int i = 0; i < 1000000; i++) { C[i] = A[i] + B[i]; }`}
                        />
                        If we run this on a CPU, each addition operation goes
                        through the full instruction pipeline, complete with
                        fetch, decode, execute, memory access, and write-back
                        stages. The CPU&apos;s control logic is busy managing
                        potential dependencies and branches that simply do not
                        exist in this context.
                    </p>
                    <p className="md:text-md text-md text-white font-serif mt-2">
                        The CPU&apos;s memory hierarchy is designed for
                        low-latency access to small, frequently used data, which
                        aligns well with most day-to-day applications. Typical
                        programs - such as web servers, business logic, or
                        control-heavy desktop applications - usually operate on
                        small data structures like integers, pointers, or small
                        arrays, and exhibit high temporal and spatial locality,
                        meaning the same data and instructions are reused
                        frequently.
                        {"\n"}
                        In contrast, data-parallel workloads - such as matrix
                        multiplication, image processing, or large-scale
                        simulations - operate on large datasets that far exceed
                        the size of the CPU&apos;s caches. As these datasets are
                        streamed through the CPU, cache lines are continuously
                        filled and evicted, forcing frequent accesses to the
                        slower main memory. This mismatch between cache size and
                        dataset volume creates stalls in the pipeline, leaving
                        execution units idle and preventing the CPU from fully
                        utilizing its computational resources.
                    </p>
                    <p className="md:text-md text-md text-white font-serif mt-2">
                        Finally, the strong sequential guarantees maintained by
                        CPUs introduce additional overhead that is unnecessary
                        for data-parallel tasks. Ensuring that instructions
                        retire in program order requires complex mechanisms like
                        reorder buffers and serialization logic. In
                        data-parallel workloads, where operations are
                        independent and can be executed in any order, these
                        mechanisms add latency and complexity without any
                        benefit.
                    </p>
                    <p className="md:text-md text-md text-white font-serif mt-2">
                        In summary, the silicon and power used by CPUs to
                        optimize the latency of single-threaded, unpredictable
                        workloads ends up being wasted and{" "}
                        <strong>actually detrimental</strong> when applied to
                        data-parallel problems. The complex control logic, cache
                        hierarchies, and sequential guarantees that make CPUs
                        excellent for general-purpose computing become
                        liabilities in the context of large-scale, uniform data
                        processing tasks.
                    </p>
                </div>
                <div>
                    <h2 className="md:text-xxl text-lg text-three font-bold mt-4">
                        GPUs - A specialized solution!
                    </h2>
                    <p className="md:text-md text-md text-white font-serif">
                        Now since we have understood data parallel problems and
                        why CPUs are not efficient for them, let&apos;s explore
                        the other solution: GPUs (Graphical Processing Units).
                    </p>
                    <p className="md:text-md text-md text-white font-serif mt-2">
                        GPU is a hardware "specialized" to solve data parallel
                        problems. Here focus on the word "specialized". Unlike
                        CPUs which are designed to be general purpose
                        processors, GPUs are designed with a specific type of
                        workload in mind - data parallelism. This specialization
                        allows GPUs to make different architectural trade-offs
                        that are not feasible in CPUs.{"\n"}
                        Before the AI/ LLM boom, GPUs were primarily used for
                        graphics rendering tasks in gaming and professional
                        visualization. This is why GPUs are called Graphical
                        Processing Units.
                    </p>
                </div>
                <div>
                    <h2 className="md:text-xxl text-lg text-three font-bold mt-4">
                        Architecture of a GPU - Processing
                    </h2>
                    <p className="md:text-md text-md text-white font-serif">
                        In this section, we will not just study the GPU
                        architecture, but also build it from the ground up by
                        understanding the design decisions that lead to the
                        final architecture. We will first understand the
                        processing architecture followed by the memory
                        architecture and connections between them. This section
                        will be a bit long.
                    </p>
                    <p className="md:text-md text-md text-white font-serif mt-2">
                        To start with, let&apos;s recall the problems we are
                        trying to solve using GPUs - Data Parallel Problems.
                        These problems have following characteristics:
                        <ul className="list-disc pl-6 mt-2">
                            <li>Large amount of data</li>
                            <li>
                                Same operation applied across large data points
                            </li>
                            <li>
                                Minimal to no dependencies between operations
                            </li>
                        </ul>
                        Now let&apos;s see how can we design a hardware to
                        efficiently solve such problems. These operations are
                        mostly arithmetic in nature - addition, multiplication,
                        etc. Thus we can have a large number of simple ALUs
                        (Arithmetic Logic Units) to perform these operations in
                        parallel. Since the operations are independent, we
                        don&apos;t need complex control logic to manage
                        dependencies or branches. That&apos;s it! Read this 3
                        times and as simple as it sounds, this is the
                        fundamental idea behind GPU architecture.
                    </p>
                    <p className="md:text-md text-md text-white font-serif mt-2">
                        Now we have multiple simple ALUs on a chip - but how do
                        we feed them same instructions and different data
                        points? Here we group multiple ALUs to a group, known as
                        a "warp" or "wavefront" (terminology varies by
                        manufacturer). A warp is just a logical grouping of
                        ALUs. It does not exist physically. Each warp broadcasts
                        the same instruction to all its ALUs, while each ALU
                        operates on different data points. This execution model
                        is often described as SIMT (Single Instruction, Multiple
                        Threads), implemented using SIMD hardware underneath.
                        Generally, a warp contains 32 or 64 ALUs. For example,
                        NVIDIA&apos;s warps contain 32 ALUs, while AMD&apos;s
                        wavefronts contain 64 ALUs.
                    </p>
                    <p className="md:text-md text-md text-white font-serif mt-2">
                        A warp is not just a flat group of ALUs - It has its own
                        program counter, set of registers and thus is stateful.
                        Now this state must live on a chip right? This chip is
                        known as a Streaming Multiprocessor (SM) in
                        NVIDIA&apos;s terminology. Each SM contains multiple
                        warps and their ALUs, registers, program counters etc.
                        SM also contains some shared memory (we will discuss
                        memory later) and a warp scheduler to schedule warps for
                        execution. We will discuss this now.
                    </p>
                    <p className="md:text-md text-md text-white font-serif mt-2">
                        Each SM contains multiple warps, and one or more warp
                        schedulers. In each clock cycle, a scheduler can issue
                        instructions from one or more ready warps to available
                        execution units. SM stores the state of many warps, and
                        the warp scheduler picks one warp in each cycle to run.
                        (To run the instrucion on all ALUs in the warp). This
                        way, if a warp is stalled (maybe waiting for data from
                        memory), the scheduler can pick another warp to run.
                        Point to note here is that 1. the state of new warp to
                        run is already on chip (in SM registers) so switching is
                        fast and 2. since warps are independent, there is no
                        dependency management needed. {"\n"}
                        This technique is known as "latency hiding" - Instead of
                        trying to reduce latency (like CPUs), we hide latency by
                        having multiple warps ready to run. Thus when one warp
                        is stalled, we can run another warp. This is a key
                        technique used in GPUs to handle high memory latencies.{" "}
                        {"\n"}
                        Finally, each GPU contains multiple SMs on a single
                        chip. Each SM operates independently, with its own set
                        of warps and ALUs. This massively parallel architecture
                        allows GPUs to handle thousands of threads
                        simultaneously, making them ideal for data-parallel
                        tasks. Now coming to the memory architecture part.
                    </p>
                    <h2 className="md:text-xxl text-lg text-three font-bold mt-4">
                        Architecture of a GPU - Memory
                    </h2>
                    <p className="md:text-md text-md text-white font-serif mt-2">
                        Up to now, we have focused on how GPUs execute a massive
                        number of arithmetic operations in parallel. But
                        computation alone is useless unless data can be fed to
                        these execution units fast enough.{"\n"}
                        This problem is solved by using a hierarchy of memory
                        stores along with few key techniques which are specialized
                        for data-parallel workloads. Let&apos;s explore them.
                    </p>
                    <p className="md:text-md text-md text-white font-serif mt-2">
                        A typical GPU memory hierarchy consists of three main
                        levels:
                        <ul className="list-disc pl-6 mt-2">
                            <li>
                                <strong>Registers: </strong> This is present
                                closest to the execution units. They store the
                                state of warps - program counters, intermediate
                                results, operands etc. They take only 1 cycle to
                                access. So if a warp needs data that is already
                                in registers, it can proceed without any stalls.
                            </li>
                            <li>
                                <strong>Shared Memory: </strong> Each SM has a
                                small amount of shared memory or SRAM. This is
                                shared across all warps and accesed by all of
                                them to reuse same data. Think of this for
                                matrix multiplication - where same row/ column
                                values are used multiple times.
                            </li>
                            <li>
                                <strong>DRAM: </strong> A very large (GBs)
                                memory store to hold large datasets. This is
                                also very wide (So that you get large chunks of
                                data in one go). Recall our data parallel
                                problem example - Vector addition of million
                                entries. Those million entries of A and B
                                vectors would be stored in a continous block in
                                DRAM right? If the DRAM is not wide enough, we
                                would need multiple accesses to get the entire
                                vector - leading to high latencies. Thus GPUs
                                use wide DRAMs to get large chunks of data in
                                one go. All of this data is then fed to ALUs to
                                perform a single operation across all of them.
                            </li>
                        </ul>
                        All of this combined with an L2 cache (to cache DRAM data)
                        forms the GPU memory hierarchy.
                    </p>
                    <p className="md:text-md text-md text-white font-serif mt-2">
                        GPU hardware also follows a technique known as
                        "memory coalescing". Since data-parallel workloads often
                        access large contiguous blocks of memory, GPUs are
                        designed to combine multiple memory requests from
                        different ALUs into a single, larger request. This
                        reduces the number of memory transactions, improving
                        bandwidth utilization and reducing latency.{'\n'}
                        Memory coalescing combined with wide DRAMs ensures that
                        GPUs can efficiently stream large datasets to the
                        execution units, keeping them fed with data and
                        minimizing stalls.
                    </p>
                    <p className="md:text-md text-md text-white font-serif mt-2">
                        Finally, to connect all of this together, GPUs use
                        high-bandwidth buses and interconnects. This ensures
                        that data can flow quickly between DRAM, shared memory,
                        registers, and execution units, minimizing bottlenecks
                        and keeping the ALUs fed with data.
                    </p>
                    <p className="md:text-md text-md text-white font-serif mt-2">
                        This is all about the core GPU architecture. In the next
                        section, let us understand some trade-offs that are made
                        in GPU architecture and why are they actually
                        trade-offs.
                    </p>
                </div>
                <div>
                    <h2 className="md:text-xxl text-lg text-three font-bold mt-4">
                        GPU Architecture Trade-offs
                    </h2>
                    <p className="md:text-md text-md text-white font-serif">
                        In the previous section, we explored the fundamental
                        architecture of GPUs and how they are optimized for data
                        parallel workloads. However, as engineers, we must
                        understand why GPUs can not be efficient for general
                        purpose computing like CPUs. This boils down to the
                        trade-offs made in GPU architecture.{"\n"}
                        GPUs are not designed to predict branches and general
                        control flow contains a lot of branches. Thus if they
                        encounter any branch, it does not matter how fast they
                        are, they will have to wait for the branch to be
                        resolved before proceeding. Moreover, they access very
                        wide memory blocks, which is not efficient for scattered
                        memory accesses. Finally, they do not have complex
                        control logic to manage dependencies between
                        instructions. All of these trade-offs make GPUs
                        inefficient for general purpose computing.
                    </p>
                </div>
                <div>
                    <p className="md:text-md text-md text-white font-serif">
                        Training and Inference of Large Language Models (LLMs)
                        are prime examples of data-parallel workloads that have
                        driven the adoption of GPUs in recent years. These tasks
                        involve performing massive amounts of linear algebra
                        operations, such as matrix multiplications and vector
                        additions, across large datasets. The inherent
                        parallelism in these operations aligns perfectly with
                        the SIMD architecture of GPUs, allowing them to execute
                        thousands of operations simultaneously.{"\n"}
                        This brings us to the end of this blog. I know this was
                        a long one, but I hope it was worth the read. We started
                        with a quick revision of CPU architecture, understood
                        the problems we solve using GPUs, explored GPU
                        architecture in detail and finally understood some of
                        the trade-offs made in GPU architecture. I hope this
                        blog helped you understand GPUs better and connect the
                        hype around you to actual CS fundamentals.{"\n"}
                        If you have any question or feedback, feel free to
                        comment below.
                    </p>
                </div>
            </div>
        </div>
    );
}
