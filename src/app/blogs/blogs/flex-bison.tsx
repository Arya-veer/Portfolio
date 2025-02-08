import Image from "next/image";

export default function FlexBisonTools({ blog }: any) {
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
                    It was exactly 2 years ago when we were
                    struggling to implement a DFA for a
                    simple language with some 70 regular
                    expressions. But after writing a few
                    hundred lines of code, we finally did
                    it. It was a simple switch case inside
                    while loop, where state is maintained. I
                    was recently going through source code
                    of postgres and was trying to learn how
                    lexers are actually implemented in real
                    application. That is when I stumbled
                    upon the FLEX tool. Diving a bit more
                    deep and I came to know about Bison. In
                    this blog, I will be discussing about
                    these tools.
                </p>
                <div>
                    <h2 className='md:text-xxl text-lg text-three font-bold mt-4'>
                        Lexical Analysis
                    </h2>
                    <p className='md:text-md text-md text-white font-serif'>
                        Before understanding the flex tool,
                        let us first understand what lexical
                        analysis is. Lexical analysis is the
                        first phase of a compiler. It takes
                        the input program and converts it
                        into a sequence of tokens. All these
                        tokens have a fixed regular
                        expression. Now, regular expression
                        is a theoretical concept, actually
                        implemented using DFAs
                        (Deterministic Finite Automata).
                        Thus, the lexical analysis is
                        implemented using DFAs where we
                        create states for each regular
                        expression and then traverse through
                        these states based on the input
                        program. Finally we tokenize of give
                        an error. For our ERPLAG compiler,
                        we too did the same implementation
                        which you can find{" "}
                        <a
                            className='text-three hover:underline'
                            href='https://github.com/Arya-veer/Compiler-Construction/blob/main/lexer.c'
                        >
                            here
                        </a>
                        .
                    </p>
                    <p className='md:text-md text-md text-white font-serif mt-2'>
                        Now the problem to create a DFA from
                        regular expressions and then
                        implementing is very tedious and
                        time consuming. This is where the
                        FLEX tool comes into play. FLEX
                        stands for Fast Lexical Analyzer
                        Generator. It is a tool which takes
                        the regular expressions and then
                        generates the C code for the DFA.
                        Thus abstracting the whole process
                        of creating DFA and implementing it.
                        This is a very powerful tool and is
                        used in many compilers. Learn more
                        about FLEX using the official{" "}
                        <a
                            className='text-three hover:underline'
                            href='https://westes.github.io/flex/manual/Introduction.html#Introduction'
                        >
                            {" "}
                            Documentation{" "}
                        </a>
                        .
                    </p>
                    <div className='w-full justify-center flex flex-row'>
                        <Image
                            src='/blogs/flex-bison/lex.png'
                            alt='Lexical Analysis'
                            width={500}
                            height={300}
                            className='mt-4'
                        />
                    </div>
                </div>
                <div>
                    <h2 className='md:text-xxl text-lg text-three font-bold mt-4'>
                        Syntax Analysis
                    </h2>
                    <p className='md:text-md text-md text-white font-serif'>
                        As the code is tokenized (stored as
                        a list of tokens), we now need to
                        parse the code, check for Syntax
                        errors and create a parse tree.
                        Parsing needs some grammar rules
                        (Context Free Grammar to be
                        precise), which is then used to
                        create a parse table. During the
                        parsing process, the tokens are
                        matched with the grammar rules using
                        a stack and then a parse tree is
                        created. You can check my
                        implementation of the ERPLAG parser{" "}
                        <a
                            className='text-three hover:underline'
                            href='https://github.com/Arya-veer/Compiler-Construction/blob/main/parser.c'
                        >
                            here
                        </a>
                        .
                    </p>
                    <p className='md:text-md text-md text-white font-serif mt-2'>
                        Bison is a powerful tool that takes
                        grammar rules as input and
                        automatically generates C code for
                        the parser. It simplifies the
                        process by handling parse table
                        creation and parser implementation,
                        making it a popular choice for many
                        compilers. You can learn more about
                        Bison tool{" "}
                        <a
                            className='text-three hover:underline'
                            href='https://web.mit.edu/gnu/doc/html/bison_1.html'
                        >
                            here
                        </a>
                        .
                    </p>
                    <div className='w-full justify-center flex flex-row'>
                        <Image
                            src='/blogs/flex-bison/parse.png'
                            alt='Syntax Analysis'
                            width={500}
                            height={300}
                            className='mt-4'
                        />
                    </div>
                </div>

                <p className='md:text-lg text-lg text-white font-serif border-t-2 border-[#ffba92] mt-4 pt-4'>
                    Thats all for this blog. I hope you are
                    dying to try these tools yourself. Even
                    if you aren&apos;t, I was and thus I
                    tried to implement a very basic compiler
                    using these tools. You can find the code{" "}
                    <a
                        className='text-three hover:underline'
                        href='https://github.com/Arya-veer/SystemDesign/tree/master/simple_compiler'
                    >
                        here
                    </a>
                    . I suggest that next time you are
                    implementing a compiler, do give these
                    tools a try. They will surely make your
                    life easier. For the people who have
                    compiler design in their curriculum, I
                    suggest you to try these tools. They
                    will surely help you in understanding
                    the concepts better.
                </p>
                <p className='md:text-lg text-lg text-white font-serif mt-4'>
                    If you have any queries or suggestions,
                    do let me know in the comments below. I
                    will be happy to help you.
                </p>
            </div>
        </div>
    );
}
