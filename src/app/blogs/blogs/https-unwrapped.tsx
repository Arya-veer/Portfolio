import Image from "next/image";
import MultilineCodeSnippet from "../components/code-snippet";

export default function HTTPsUnwrapped({ blog }: any) {
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
          HTTPS i.e. HTTP Secure. What are the issues with HTTP that we need
          HTTPS, and how it makes the web secure? This will be a long blog,
          where we will start with the issue, then see how it is fixed and try
          to think of ways to break it again and again.
        </p>
        <p className="md:text-md text-md text-white font-serif mt-2">
          I have tried to include math and some code snippets for you to
          understand the concepts better. The blog is not written in the
          chronological HTTPS order, but rather in a way that you can understand
          the concepts better. At the end, we will understand the chronological
          order and summarize everything. Let&apos;s get started.
        </p>
        <div>
          <h2 className="md:text-xxl text-lg text-three font-bold mt-4">
            Scenario
          </h2>
          <p className="md:text-md text-md text-white font-serif">
            Let us start with a scenario. Here we will understand everything in
            a story format. Then we will discuss the technicalities and other
            aspects. You have opened a website, and you have entered your
            username and password. You click submit button and an HTTP request
            is sent to the server. I assume that you know how this request
            reaches the server. It jumps over multiple routers and switches,
            passing through multiple ISPs.
          </p>
          <p className="md:text-md text-md text-white font-serif mt-2">
            Let&apos;s say I am a hacker and I intercept this request. What can
            I do now? I can decode the data sent, see the username and password,
            and then I can use it to login to your account. This is a very basic
            scenario, but it is a very real scenario where your data is used by
            someone else. This is known as Man In The Middle Attack (MITM).
            There are various ways to do this attack, so we should be careful
            about connecting with unsecured sites over public networks like
            airports and cafes.
          </p>
          <p className="md:text-md text-md text-white font-serif mt-2">
            So how do we prevent the hacker from seeing our data? We can encrypt
            the data and send it to the server. But the server does not know how
            to decrypt the data. So we need to tell the server the
            encryption/decryption key too. We send the key along with the data.
            But hey, there is a man in the middle. Hacker can use the same key
            to decrypt the data. That is where TLS handshake comes into play.
          </p>
        </div>
        <div>
          <h2 className="md:text-xxl text-lg text-three font-bold mt-4">
            TLS Handshake
          </h2>
          <p className="md:text-md text-md text-white font-serif">
            Handshake is a process where two parties communicate with each other
            to establish some kind of connection. Just like a TCP handshake,
            where the server and client communicate with each other to establish
            a connection. In TLS handshake, the client and server communicate
            with each other to establish a secure connection. This happens after
            the TCP handshake.
          </p>
          <p className="md:text-md text-md text-white font-serif mt-2">
            Let&apos;s jump back to the initial scenario. We need to encrypt the
            data and send it to server with some key which server also has.
            During initial handshake, the client can send the key to the server
            or the server can send the key to the client. But the hacker can
            intercept this key too. How do we prevent this? It is simple yet
            powerful mathematics. Along with some conventions. We will jump to
            the exact details and math later, first understand it in a very
            simplified way.
          </p>
          <p className="md:text-md text-md text-white font-serif mt-2">
            The server and client know about a common number, let&apos;s say{" "}
            <em>G</em>. Now the client and server generate a private number:{" "}
            <em>a</em> and <em>b</em> respectively. The client now calculates{" "}
            <em>a*G</em> and server calculates <em>b*G</em>. Now the client
            sends <em>a*G</em> to server and server sends <em>b*G</em> to
            client. Now the client calculates <em>(b*G)*a</em> and server
            calculates <em>(a*G)*b</em>. Now both the client and server have the
            same number. This number can be now modified to be used as an
            encryption key.
          </p>
          <p className="md:text-md text-md text-white font-serif mt-2">
            Let us now look at how hacker can exploit any weakness in this.
            Hacker needs <em>a*b*G</em> to decrypt the data. The value,
            <em>G</em> is a known constant so hacker knows G. Hacker can
            intercept the data sent so can get <em>a*G</em>
            <em>b*G</em> too. In order to get <em>a*b*G</em>, hacker needs
            either a or b. Simple division right? Yes, so what can we do?
          </p>
          <p className="md:text-md text-md text-white font-serif mt-2">
            Mathematicians and Computer scientists have found a way to solve
            this problem. They have made it next to impossible to get <em>a</em>{" "}
            or <em>b</em> from <em>a*G</em> or <em>b*G</em>. This is done using
            a concept called ECDHE (Elliptic Curve Diffie-Hellman Ephemeral). We
            will understand this in a great detail later. In short, just
            understand that this is not simple multiplication but complex math.
            Just bear with me for a while and assume that it is nearly
            impossible to get <em>a</em> or <em>b</em> from
            <em>a*G</em> so that we can understand other concepts better.
          </p>
          <p className="md:text-md text-md text-white font-serif mt-2">
            Now the client and server have a common key which is used to encrypt
            the data. The hacker has no way to get this key because of some
            reasons we will discuss in a great detail later. The client encrypts
            the data using this key and sends it to the server. The server
            decrypts the data using the same key. Now the hacker can not decrypt
            the data as he does not have the key. Problem solved right? No, not
            yet.
          </p>
          <p className="md:text-md text-md text-white font-serif mt-2">
            The hackers are very smart, and they can even change the data we
            send across. So what will they do? During the initial key exchange,
            i.e. initial a*G and b*G exchange, the client will send a*G to the
            server, but the hacker will intercept, and receives b*G from the
            server and intercepts it. Hacker can keep the b*G, generates another
            number c and send it&apos;s own c*G to the client. The client
            assumes that it is the server, calculates c*G*a and sends the data
            to the hacker. The hacker who has c, can easily calculate c*a*G and
            decrypt the data. So hacker again has your data lol.
          </p>
          <p className="md:text-md text-md text-white font-serif mt-2">
            So how do we prevent this? We need to authenticate the server and
            client. During the initial handshake, we need a signature from the
            server that the data sent i.e. b*G is from the actual server and not
            from hacker. This is where the concept of certificate comes into
            play. The b*G of server (known as ephemeral key) is signed by the
            server using a key only known to the server (private key). The
            client gets the public key to verify (decrypt) the signature whether
            it is actually from the server or not.
          </p>
          <p className="md:text-md text-md text-white font-serif mt-2">
            So basically we have two parts of TLS. One is the earlier part of
            certificates, and the later is one of key exchange. As mentioned,
            certificates are used to verify that actually server has sent the
            ephemeral key. On the other hand, ephemeral key(b*G) is used to
            generate actual encryption and decryption key(a*b*G).
          </p>
        </div>
        <div>
          <h2 className="md:text-xxl text-lg text-three font-bold mt-4">
            Certificate: Why and How
          </h2>
          <p className="md:text-md text-md text-white font-serif">
            This is the only blog you would need to understand the certificate
            part of TLS. Let us start this in a different order of
            understanding. Whenever we talk about signatures, we need a source
            of truth always. This source of truth needs to be trusted by both
            server and client. Certification Autorities (CA) are the source of
            truth when it comes to TLS certificates. Examples of CAs are:
            Digicert, GlobalSign, Lets Encrypt etc. Certificate is nothing but a
            file commonly with extension .crt. It contains some important
            information like: Issuer, Subject, Validity, Public Key, Signature
            Algorithm etc.
          </p>
          <p className="md:text-md text-md text-white font-serif mt-2">
            Now let us understand what signing actually means. Signing refers to
            conversion of data applying some mathematical functions into other
            form. In TLS handshake, the private key on server (residing in
            server.key file) is used to sign the ephemeral key + some data
            hashed together i.e.
            {
              <MultilineCodeSnippet code="sign(hash(ServerRandom + ClientRandom + b*G))" />
            }
            The signature is then sent to the client along with plain b*G. The
            client also hashes the same i.e.
            {
              <MultilineCodeSnippet code="hash(ServerRandom + ClientRandom + b*G)" />
            }
            It then decrypts the signature using the public key of server. If
            the decrypted signature is same as the hash calculated by client,
            then the client can be sure that the data is from the server and not
            from hacker. Otherwise the client can be sure that the data is from
            hacker.
          </p>
          <p className="md:text-md text-md text-white font-serif mt-2">
            Now there should be 2 questions in your mind: 1. How does browser
            verifies that the public key which is received is actually from the
            server and not from hacker? 2. If actually the public key and
            private key pair can encrypt and decrypt data, why we need to
            generate ephemeral keys everytime? and then use them to generate the
            actual key? I will answer the second question first. The
            public-private key pair can only encrypt a very small amount of data
            (bytes) while the data send over internet is always few 100
            kilobytes. Also the time taken to encrypt and decrypt the data is
            very high when it comes to the public-private key pair. That is why
            the actual data encryption is symmetric encryption i.e. same key is
            used to encrypt and decrypt the data(a*b*G). Now coming to the first
            question, we need to deep dive how the public key is generated.
          </p>
          <p className="md:text-md text-md text-white font-serif mt-2">
            The public key is found inside the certificate file. So how does it
            get there? Firstly we generate a private key:
            {
              <MultilineCodeSnippet code="openssl genrsa -out server.key 2048" />
            }
            This private key is kept secret. Now we generate a certificate
            signing request. This request is kept inside server.csr file:
            {
              <MultilineCodeSnippet code="openssl req -new -key server.key -out server.csr" />
            }
            Now this request is sent to the CA. If you are using open source CA
            like Lets Encrypt, then you can generate the certificate using lets
            encrypt command:
            {
              <MultilineCodeSnippet code="certbot certonly --standalone -d example.com" />
            }
            This will generate a certificate file i.e. server.crt.
            Alternatively, if you are using a paid CA, then you need to send the
            server.csr file to the CA. The CA will verify the request and then
            send you the certificate files: server.crt and intermediate.crt
          </p>
          <p className="md:text-md text-md text-white font-serif mt-2">
            File server.crt contains the public key(paired with private key
            initially generated) and other info like CA, validity, signature
            algorithm etc. This all data inside server.crt is signed by the CA
            using an intermediate private key (residing at CA; very very
            secure), Now the public key is long term key, sent to the client
            during handshake along with the intermediate.crt The
            intermediate.crt is actually signed by private key of CA. So now
            things are getting aligned. Let&apos;s again summarize:
            <ul className="flex flex-col text-three list-disc ml-4 list-inside gap-1 mt-2">
              <li>Server has a root private key and root.crt</li>
              <li>
                When we generate our server.crt, servers give us an
                intermediate.crt too
              </li>
              <li>This intermediate.crt is signed by root private key</li>
              <li>
                The server.crt is signed by the intermediate private key. and
                the signature is appended to server.crt itself
              </li>
              <li>
                Now we send intermediate.crt and server.crt to client along with
                public key.
              </li>
              <li>
                root.crt is <b>hardcoded</b> in the browsers, so browsers use
                them to verify intermediate.crt
              </li>
              <li>
                Then the intermediate public key sent along in intermediate.crt
                is used to verify server.crt certificate
              </li>
              <li>
                Once verified, client stores the server public key for upcoming
                ephemeral key(b*G).
              </li>
            </ul>
          </p>
          <p className="md:text-md text-md text-white font-serif mt-2">
            So now the client can be sure that the public key is actually from
            the server and not from hacker. And the client has the actual public
            key to verify the signature on the ephemeral key. So let us
            understand the second part of the TLS i.e. how a*G and b*G generated
            so that even after knowing G, a and b are not calculated. This is
            the concept of Diffie-Hellman Elliptic Curves, some interesting
            mathematics. Next section.
          </p>
        </div>
        <div>
          <h2 className="md:text-xxl text-lg text-three font-bold mt-4">
            ECDHE
          </h2>
          <p className="md:text-md text-md text-white font-serif">
            ECDHE stands for Elliptic Curve Diffie Hellman ephemeral. Diffie
            Hellman is the protocol which defines this complex math, rules and
            standard values. Elliptic curves are mathematical curves over real
            numbers, integers or modded integers too. ephemeral means that keys
            are changed every session. Let&apos;s understand some of my
            favourite subject: MATHEMATICS.
          </p>
          <p className="md:text-md text-md text-white font-serif mt-2">
            Elliptic curves we will be talking about here are of form:
            {<MultilineCodeSnippet code="y^2 = x^3 + ax + b" />}
            Additionally, <em>4a^3 + 27b^2 {">"} 0 </em>
          </p>
          <p className="md:text-md text-md text-white font-serif mt-2">
            Points lying on this curve follow a property. Their addition and
            scalar multiplication once defined, is closed. i.e. Two points: P
            (xp,yp) and Q (xq,yq) lying on curve once added, P+Q=R (xr,yr), then
            (xr,yr) too lies on the curve. How?
          </p>
          <p className="md:text-md text-md text-white font-serif mt-2">
            The answer lies in the fact that how we define curve addition. Any
            line will intersect this curve atmost thrice(explained in code
            snippet), unless the line is completely vertical. In that case we
            define the third point as infinity(Both meet at infinity). So let us
            solve for R(xr,yr) which will be the third point of intersection of
            line passing through P(xp,yp) and Q(xq,yq) with curve{" "}
            <em>y^2 = x^3 + ax + b</em>
            {
              <MultilineCodeSnippet
                code="
                            Slope of line: m = (yq-yp)/(xq-xp);
                            Equation of line = y-yp = m(x-xp) => y = m(x-xp) + yp;
                            Putting this in equation of curve: (m(x-xp) + yp)^2 = x^3 + ax + b;
                            Rearranging the terms: x^3 - (m^2)x^2 + (a-2myp + 2m^2xp)x + (b-m^2xp^2+2mypxp-yp^2) = 0;
                            Now we know that sum of roots will be -(coefficient of x^2/coefficient of x^3): xp+xq+xr = m^2;
                            => xr = m^2 - (xp+xq);
                            => substituting in initial equation, yr = m(xp-xr) - xq;
                        "
              />
            }
            So we get R(xr, yr). This is how we do addition of P and Q.
          </p>
          <p className="md:text-md text-md text-white font-serif mt-2">
            Let us see how we can add a point to itself i.e. calculate P+P = 2P.
            This is similar to the earlier case, only the line defined is
            tangent to the curve at point P. R will be the point of intersection
            where the tangent again intersects the curve. So we can calculate
            the slope of the tangent at point P(xp,yp) as:
            {
              <MultilineCodeSnippet
                code="
                            Slope of tangent(Differentiate and find): m = (3xp^2 + a)/(2yp);
                            Equation of line = y-yp = m(x-xp) => y = m(x-xp) + yp;
                            Putting this in equation of curve: (m(x-xp) + yp)^2 = x^3 + ax + b;
                            Rearranging the terms: x^3 - (m^2)x^2 + (a-2myp + 2m^2xp)x + (b-m^2xp^2+2mypxp-yp^2) = 0;
                            Now we know that sum of roots will be -(coefficient of x^2/coefficient of x^3): xp+xq+xr = m^2;
                            => xr = m^2 - (2xp);
                            => substituting in initial equation, yr = m(xp-xr) - xp;
                        "
              />
            }
            So we get R(xr, yr). And we have learnt doubling of point too.
          </p>
          <p className="md:text-md text-md text-white font-serif mt-2">
            But why is all this important? Coming to it in a while, just keep
            learning the concepts. Once we have a point on curve, we can keep
            doing scalar multiplications. Also, we can memoize some of the
            multiplications for faster calculations. Let me explain this with an
            example. Assume we want to calculate 13P.
            {<MultilineCodeSnippet code="13P = 8P + 4P + P" />}
            Once we have P, we can calculate 2P, 4P and 8P using the earlier
            method (doubling); So we can calculate 13P in 3 multiplications
            instead of 13. Bingo!
          </p>
          <p className="md:text-md text-md text-white font-serif mt-2">
            Another property of elliptic curves: THEY ARE CYCLIC GROUPS. This
            means that if we keep adding a point to itself, we will get back the
            same point after some time. i.e. There exists a scalar n such that
            nP = O (point at infinity). This is known as order of the point. So
            we can keep adding a point to itself and get back the same point
            after some time.
          </p>
          <p className="md:text-md text-md text-white font-serif mt-2">
            Now one last concept is that of modded values. We can define the
            elliptic curve over modded primes too. i.e.{" "}
            {<MultilineCodeSnippet code="y^2 = x^3 + ax + b mod p" />}
            This means that we can define the elliptic curve over a finite field
            and we can do all the operations over this finite field. This is
            very important as we can do all the operations over a finite field
            because mod operations do not get lost in precision issues.
          </p>
        </div>
        <div>
          <h2 className="md:text-xxl text-lg text-three font-bold mt-4">
            ECDHE in TLS (Action)
          </h2>
          <p className="md:text-md text-md text-white font-serif">
            You now have an amazing understanding of ECDHE. Also you have gotten
            a crude idea of TLS. Let us combine these and see magic happens.
            Remember what we want to achieve? We have G (known to everyone in
            the world), we can generate a and b (private keys) only known to
            client and server respectively. Then we calculate a*G and b*G. Now
            we send a*G to server and b*G to client. (So the hacker can
            intercept this). Now the client calculates a*G*b and server
            calculates b*G*a (both are same). Now we have a common key which is
            used to encrypt the data. We want to make sure that the hacker does
            not get a or b even if they have a*G, b*G and G. Elliptic curves do
            not define any kind of division. The only possible operations are
            addition and which leads to scalar multiplication. So we can not
            divide a*G or b*G to get a or b.
          </p>
          <p className="md:text-md text-md text-white font-serif mt-2">
            Now everything comes in place, we have solved the problem. Yeaaa!!
            Let us just take in some information based upon the discussion. How
            is G known? What are the possible values of a and b? Let&apos;s
            answer all of these one by one.
          </p>
          <p className="md:text-md text-md text-white font-serif mt-2">
            Mathematicians and Computer scientists have defined some standard
            elliptic curves (modded primes)., some of them are: secp256k1,
            secp256r1, secp384r1, secp521r1. TLS uses secp256r1. The generator
            point, G is fixed for each curve so that the value of G is known to
            everyone and that value is extensively analyzed and tested against
            any cryptoanalysis. Important thing is that the order of the point G
            (n) is very large. because a and b are in range [0, n-1]. So the
            hacker can not brute force the values of a and b. Also the prime p
            needs to be very large so that the hacker can not brute force the
            value of a*b*G. For the secp256r1 curve:
            {
              <MultilineCodeSnippet
                code="
                                prime to mod is: p = 2^256 - 2^224 + 2^192 + 2^96 - 1;
                                order of G: n = 2^256 - 2^32 - 2^8 - 2^7 - 2^6 - 2^4 - 1;
                                The actual point on curve: G(x,y) = (0x79BE667EF9DCBBAC55A06295CE870B07029BFCDB2DCE28D959F2815B16F81798,
                                0x483ADA7726A3C4655DA4FBFC0E1108A8FD17B448A68554199B3AD7E41D8C9C47);
                                The curve is: y^2 = x^3 + 0xffffffff00000001000000000000000000000000fffffffffffffffffffffffc*(x)
                                 + 0x5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b;
                                 ;
                                All these values are modded with p.
                            "
              />
            }
            Because of such large magnitude of data (256 bits), the hacker can
            not brute force the values of a and b. Just for reference, the
            number of possible values of a and b is 2^256 which is more than the
            number of atoms in universe and it will take more than 10^100 years
            to brute force the values of a and b using even the fastest
            supercomputers in the world. So we can be sure that the hacker can
            not brute force the values of a and b.
          </p>
          <p className="md:text-md text-md text-white font-serif mt-2">
            Once we have a*b*G (only known to client and server) which is
            actually a point on the curve, we generally use the x coordinate of
            the point and pass it through a Key Derivation Function (KDF) along
            with some random data (ClientRandom and ServerRandom) to generate
            the actual key. The KDF is a function which takes in some data and
            generates a key of fixed length. (AES256 key for eg)
          </p>
        </div>
        <div>
          <h2 className="md:text-xxl text-lg text-three font-bold mt-4">
            Adding all pieces together
          </h2>
          <p className="md:text-md text-md text-white font-serif">
            We initially came up with two problems at lowest level: 1. How to
            generate a*G so that a is not known to hacker? 2. How to actually
            verify that the server is actually sending the data and not hacker?
            We solved the first problem using ECDHE and second problem using
            certificates.
          </p>
          <p className="md:text-md text-md text-white font-serif mt-2">
            Now let&apos;s see how the TLS handshake looks like:
            <ol className="flex flex-col text-three list-decimal ml-4 list-inside gap-1 mt-2">
              <li>TCP connection is established</li>
              <li>
                Client sends a <b>ClientHello</b> message to server with some
                random data (ClientRandom) and supported cipher suites.
              </li>
              <li>
                Server sends a <b>ServerHello</b> message to client with some
                random data (ServerRandom), selects a cipher and responds back
                with the selected cipher suite. Server also sends the
                server.crt(contains public key) and intermediate.crt to client.
              </li>
              <li>
                Client verifies the server.crt and intermediate.crt using the
                root.crt (hardcoded in browser). If verified, client stores the
                public key of server.
              </li>
              <li>
                Client generates a and calculates a*G. Client sends a*G to
                server.
              </li>
              <li>
                Server generates b and calculates b*G. Server sends b*G to
                client.
              </li>
              <li>
                Client calculates a*G*b and server calculates b*G*a. Now both
                have the same key.
              </li>
              <li>
                Client and server now send the encrypted data using the common
                key.
              </li>
            </ol>
            Attaching the diagram for the same:
            <Image
              src="/blogs/https-unwrapped/flow-diagram.png"
              alt="TLS Handshake"
              width={300}
              height={300}
              className="w-1/3 h-auto mt-2"
            />
          </p>
          <p className="md:text-md text-md text-white font-serif mt-2">
            We now have a secure connection between client and server. Data is
            encrypted and sent. Although some are speculating that with
            advancement in quantum computing, the ECDHE will be broken. But that
            is the game of cat and mouse, and we will have to wait and see.
          </p>
          <p className="md:text-md text-md text-white font-serif mt-2">
            Here are few resources I used to understand the concepts better:
            <ul className="flex flex-col text-three list-disc ml-4 list-inside gap-1 mt-2">
              <li>
                <a
                  className="underline hover:text-orange-500"
                  href="https://www.rareskills.io/post/elliptic-curve-addition"
                >
                  Understand Elliptic curves better
                </a>
              </li>
              <li>
                <a
                  className="underline hover:text-orange-500"
                  href="https://youtu.be/F3zzNa42-tQ?si=4EmHKq-jHhLrHJIO"
                >
                  Youtube video on elliptic curves
                </a>
              </li>
              <li>Chat GPT</li>
            </ul>
          </p>
        </div>
        <p className="md:text-lg text-lg text-white font-serif mt-4">
          I know this was a very long blog, very informative. I can guarantee
          you that you will never need any other resource to understand the TLS
          handshake and HTTPS. Read it twice or thrice, and also go through the
          resources I am attaching. You can always use your favourite LLM to
          understand the concepts better. I have tried to explain the concepts
          in a very simple way. I hope you liked the blog. If you have any
          queries, feel free to comment.
          <br />I will be attaching a few images soon.
        </p>
      </div>
    </div>
  );
}
