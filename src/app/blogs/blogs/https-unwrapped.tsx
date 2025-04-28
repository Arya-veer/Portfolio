import Image from "next/image";
import MultilineCodeSnippet from "../components/code-snippet";

export default function HTTPsUnwrapped({ blog }: any) {
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
                    HTTPs i.e. HTTP Secure. What are the issues with HTTPs that 
                    we need HTTPs, and how it makes it secure? This will be a long
                    blog, where we will start with the issue, then see how it is fixed
                    and try to think of ways to break it again and again. 
                    
                </p>
                <p className='md:text-md text-md text-white font-serif mt-2'>
                    I have tried to include math and some code snippets for you to understand the 
                    concepts better. The blog is not written in the chronological https order, but 
                    rather in a way that you can understand the concepts better. At the end, we will 
                    understand the chronological order and summarize everything. Let&apos;s get started.
                </p>
                <div>
                    <h2 className='md:text-xxl text-lg text-three font-bold mt-4'>
                        Scenario
                    </h2>
                    <p className='md:text-md text-md text-white font-serif'>
                        Let us start with a scenario. Here we will understand everything in a story format. Then we will discuss 
                        the technicalities and other aspects.
                        You have opened a website, and you have entered your username and password.
                        You click submit button and an HTTP request is sent to the server. 
                        I assume that you know how this request reaches the server. It jumps over multiple routers and switches,
                        passing through multiple ISPs.
                    </p>
                    <p className='md:text-md text-md text-white font-serif mt-2'>
                        Let&apos;s say I am a hacker and I intercept this request. What can I do now?
                        I can decode the data sent, see the username and password, and then I can use it to login to your account.
                        This is a very basic scenario, but it is a very real scenario where your data is used by someone else.
                        This is known as Man In The Middle Attack (MITM). There are various ways to do this attack,
                        so we should be careful about connecting with unsecured sites over public networks like airports and cafes.
                    </p>
                    <p className='md:text-md text-md text-white font-serif mt-2'>
                        So how do we prevent the hacker from seeing our data? We can encrypt the data and send it to the server.
                        But the server does not know how to decrypt the data. So we need to tell the server the encryption/decryption key too.
                        We send the key along with the data. But hey, there is a man in the middle. Hacker can use the same key to decrypt the data.
                        That is where TLS handshake comes into play.
                    </p>
                </div>
                <div>
                    <h2 className='md:text-xxl text-lg text-three font-bold mt-4'>
                        TLS Handshake
                    </h2>
                    <p className='md:text-md text-md text-white font-serif'>
                        Handshake is a process where two parties communicate with each other to establish some kind of connection.
                        Just like a TCP handshake, where the server and client communicate with each other to establish a connection.
                        In TLS handshake, the client and server communicate with each other to establish a secure connection.
                        This happens after the TCP handshake.
                    </p>
                    <p className='md:text-md text-md text-white font-serif mt-2'>
                        Let&apos;s jump back to the initial scenario.
                        We need to encrypt the data and send it to server with some key which server also has.
                        During initial handshake, the client can send the key to the server or the server can send the key to the client.
                        But the hacker can intercept this key too. How do we prevent this?
                        It is simple yet powerful mathematics. Along with some conventions.
                        We will jump to the exact details and math later, first understand it in a very simplified way.
                    </p>
                    <p className='md:text-md text-md text-white font-serif mt-2'>
                        The server and client know about a common number, let&apos;s say <em>G</em>.
                        Now the client and server generate a private number: <em>a</em> and <em>b</em> respectively.
                        The client now calculates <em>a*G</em> and server calculates b*G.
                        Now the client sends <em>a*G</em> to server and server sends b*G to client.
                        Now the client calculates <em>(b*G)*a</em> and server calculates <em>(a*G)*b</em>.
                        Now both the client and server have the same number.
                        This number can be now modified to be used as an encryption key.
                    </p>
                    <p className='md:text-md text-md text-white font-serif mt-2'>
                        Let us now look at how hacker can exploit any weakness in this.
                        Hacker needs a*b*G to decrypt the data. The value G is a known constant so hacker knows G.
                        Hacker can intercept the data sent so can get a*G and b*G.
                        In order to get a*b*G, hacker needs either a or b.
                        Simple division right? Yes, so what can we do?
                    </p>
                    <p className='md:text-md text-md text-white font-serif mt-2'>
                        Mathematicians and Computer scietists have found a way to solve this problem. 
                        They have made it next to impossible to get a or b from a*G or b*G.
                        This is done using a concept called ECDHE (Elliptic Curve Diffie-Hellman Ephemeral).
                        We will understand this in a great detail later. In short, just understand that this is 
                        not simple multiplication but complex math. Just bear with me for a while and 
                        assume that it is nearly impossible to get a or b from a*G so that we can understand other concepts better.
                    </p>
                    <p className="md:text-md text-md text-white font-serif mt-2">
                        Now the client and server have a common key which is used to encrypt the data.
                        The client encrypts the data using this key and sends it to the server.
                        The server decrypts the data using the same key.
                        Now the hacker can not decrypt the data as he does not have the key.
                        Problem solved right? No, not yet.
                    </p>
                    <p className="md:text-md text-md text-white font-serif mt-2">
                        The hackers are very smart, and they can even change the data we send across.
                        So what will they do? During the initial key exchange, i.e. initial a*G and b*G exchange,
                        the client will send a*G to the server, but the hacker will intercept,
                        and receives b*G from the server and intercepts it. Hacker can keep the b*G, generates another number c
                        and send it&apos;s own c*G to the client.
                        The client assumes that it is the server, calculates c*G*a and sends the data to the hacker.
                        The hacker who has c, can easily calculate c*a*G and decrypt the data.
                        So hacker again has your data lol.
                    </p>
                    <p className="md:text-md text-md text-white font-serif mt-2">
                        So how do we prevent this? We need to authenticate the server and client.
                        During the initial handshake, we need a signature from the server that the 
                        data sent i.e. b*G is from the actual server and not from hacker. This is 
                        where the concept of certificate comes into play. The b*G of server (known as ephemeral key)
                        is signed by the server using a key only known to the server (private key).
                        The client gets the public key to verify (decrypt) the signature whether 
                        it is actually from the server or not. 
                    </p>
                    <p className="md:text-md text-md text-white font-serif mt-2">
                        So basically we have two parts of TLS. One is the earlier part of certificates,
                        and the later is one of key exchange. As mentioned, certificates are used to verify
                        that actually server has sent the ephemeral key. On the other hand, ephermal key(b*G)
                        is used to generate actual encryption and decryption key(a*b*G).
                    </p>
                </div>
                <div>
                    <h2 className='md:text-xxl text-lg text-three font-bold mt-4'>
                        Certifiate: Why and How
                    </h2>
                    <p className='md:text-md text-md text-white font-serif'>
                        This is the only blog you would need to understand the certificate part of TLS.
                        Let us start this in a different order of understanding. Whenever we talk about 
                        signatures, we need a source of truth always. This source of truth needs to be 
                        trusted by both server and client. Certification Autorities (CA) are the source of truth
                        when it comes to TLS certificates. Examples of CAs are: Digicert, GlobalSign, Lets Encrypt etc.
                        Certificate is nothing but a file commonly with extension .crt.
                        It contains some important information like: 
                        Issuerer, Subject, Validity, Public Key, Signature Algorithm etc.
                    </p>
                    <p className="md:text-md text-md text-white font-serif mt-2">
                        Now let us understand what signing actually means. Signing refers to conversion of 
                        data applying some mathematical functions into other form. In TLS handshake, the 
                        private key on server (residing in server.key file) is used to sign the 
                        ephermal key + some data hashed together i.e.
                        {<MultilineCodeSnippet code="sign(hash(ServerRandom + ClientRandom + b*G))"/>}
                        The signature is then sent to the client along with plain b*G.
                        The client also hashes the same i.e.
                        {<MultilineCodeSnippet code="hash(ServerRandom + ClientRandom + b*G)"/>}
                        It then decrypts the signature using the public key of server.
                        If the decrypted signature is same as the hash calculated by client, then the client 
                        can be sure that the data is from the server and not from hacker.
                        Otherwise the client can be sure that the data is from hacker.
                    </p>
                    <p className="md:text-md text-md text-white font-serif mt-2">
                        Now there should be 2 questions in your mind: 1. How does browser verifies that 
                        the public key which is received is actually from the server and not from hacker? 
                        2. If actually the public key and private key pair can encrypt and decrypt data, why
                        we need to generate ephermal keys everytime? and then use them to generate the actual key?
                        I will answer the second question first. The public-private key pair can only encrypt a very
                        small amount of data (bytes) while the data send over internet is always few 100 kilobytes.
                        Also the time taken to encrypt and decrypt the data is very high when it comes to the 
                        public-private key pair. 
                        That is why the actual data encryption is symmetric encryption i.e. 
                        same key is used to encrypt and decrypt the data(a*b*G). 
                        Now coming to the first question, we need to deep dive how the public key is generated.
                    </p>
                    <p className="md:text-md text-md text-white font-serif mt-2">
                        The public key is found inside the certificate file. So how does it get there?
                        Firstly we generate a private key: 
                        {<MultilineCodeSnippet code='openssl genrsa -out server.key 2048' />}
                        This private key is kept secret. Now we generate a certificate signing request.
                        This request is kept inside server.csr file:
                        {<MultilineCodeSnippet code='openssl req -new -key server.key -out server.csr' />}
                        Now this request is sent to the CA.
                        If you are using open source CA like Lets Encrypt, then you can generate the certificate
                        using lets encrypt command:
                        {<MultilineCodeSnippet code='certbot certonly --standalone -d example.com' />}
                        This will generate a certificate file i.e. server.crt.
                        Alternatively, if you are using a paid CA, then you need to send the server.csr file to the CA.
                        The CA will verify the request and then send you the certificate files: server.crt and 
                        intermediate.crt
                    </p>
                    <p className="md:text-md text-md text-white font-serif mt-2">
                        File server.crt contains the public key(paired with private key initially generated)
                        and other info like CA, validity, signature algorithm etc. This all data inside 
                        server.crt is signed by the CA using an intermediate private key
                        (residing at CA; very very secure), Now the public key is long term key, 
                        sent to the client during handshake along with the intermediate.crt
                        The intermediate.crt is actually signed by private key of CA.
                        So now things are getting aligned. Let&apos;s again summarize:
                        <ul className="flex flex-col text-three list-disc ml-4 list-inside gap-1 mt-2">
                            <li>Server has a root private key and root.crt</li>
                            <li>When we generate our server.crt, servers give us an intermediate.crt too</li>
                            <li>This intermediate.crt is signed by root private key</li>
                            <li>The server.crt is signed by the intermediate private key. and the signature is appended to server.crt itself</li>
                            <li>Now we send intermediate.crt and server.crt to client along with public key.</li>
                            <li>root.crt is <b>hardcoded</b> in the browsers, so browsers use them to verify intermediate.crt</li>
                            <li>Then the intermediate public key sent along in intermediate.crt is used to verify server.crt certificate</li>
                            <li>Once verified, client stores the server public key for upcoming ephermal key(b*G).</li>
                        </ul>
                    </p>
                    <p className="md:text-md text-md text-white font-serif mt-2">
                        So now the client can be sure that the public key is actually from the server and not from hacker.
                        And the client has the actual public key to verify the signature on the ephermal key.
                        So let us understand the second part of the TLS i.e. how a*G and b*G generated so that even after
                        knowing G, a and b are not calculated. This is the concept of Diffie-Hellman Elliptic Curves, 
                        some intresting mathematics. Next section.
                    </p>
                </div>
                <div>
                    <h2 className='md:text-xxl text-lg text-three font-bold mt-4'>
                        ECDHE
                    </h2>
                    <p className='md:text-md text-md text-white font-serif'>
                        ECDHE stands for Elliptic Curve Diffie Hellman Ephermal. Diffie Hellman is the protocol which defines
                        this complex math, rules and standard values. Elliptic curves are mathematical curves over real numbers,
                        integers or modded integers too. Ephermal means that keys are changed every session.
                        Let&apos;s understand some of my favourite subject: MATHEMATICS.
                    </p>
                    <p className='md:text-md text-md text-white font-serif mt-2'>
                        Elliptic curves we will be talking about here are of form: 
                        {<MultilineCodeSnippet code="y^2 = x^3 + ax + b" />}
                        Additionally, 4a^2 + 27b != 0 
                    </p>
                    <p className="md:text-md text-md text-white font-serif mt-2" >
                        Points lying on this curve follow a property. Their addition and scalar multiplication
                        once defined, is closed. i.e. Two points: P (xp,yp) and Q (xq,yq) lying on curve once added,
                        P+Q=R (xr,yr), then (xr,yr) too lies on the curve. How?
                    </p>
                    <p className="md:text-md text-md text-white font-serif mt-2">
                        The answer lies in the fact that how we define curve addition.
                        Any line will intersect this curve atmost thrice(explained in code snippet), unless the line is completely vertical.
                        In that case we define the third point as infinity(Both meet at infinity).

                        So let us solve for R(xr,yr) which will be the third point of intersection of line passing
                        through P(xp,yp) and Q(xq,yq) with curve <em>y^2 = x^3 + ax + b</em>
                        
                        {<MultilineCodeSnippet code="
                            Slope of line: m = (yq-yp)/(xq-xp);
                            Equation of line = y-yp = m(x-xp) => y = m(x-xp) + yp;
                            Putting this in equation of curve: (m(x-xp) + yp)^2 = x^3 + ax + b;
                            Rearranging the terms: x^3 - (m^2)x^2 + (a-2myp + 2m^2xp)x + (b-m^2xp^2+2mypxp-yp^2) = 0;
                            Now we know that sum of roots will be -(coefficient of x^2/coefficient of x^3): xp+xq+xr = m^2;
                            => xr = m^2 - (xp+xq);
                            => substituting in initial equation, yr = m(xp-xr) - xq;
                        "/>}
                        So we get R(xr, yr).
                        This is how we do addition of P and Q.
                    </p>
                </div>
                <p className='md:text-lg text-lg text-white font-serif mt-4'>
                    If you have any queries or suggestions,
                    do let me know in the comments below. I
                    will be happy to help you.
                </p>
            </div>
        </div>
    );
}
