import React from 'react'

const home = () => {
  return (
<div className='mb-20'>
    <h1 className='sm:text-4xl text-2xl font-bold my-6'>Hello, welcome to my Blog</h1>
    <p className='mx-auto leading-relaxed text-base mb-4'>This is a blog built using NodeJs, Express, MongoDB & React JS (MERN)</p>
    <p className='mx-auto leading-relaxed text-base mb-4'>MERN stands for MongoDB, Express, React, Node, after the four key technologies that make up the stack.
<ol>
<li>1. MongoDB — document database</li>
<li>2. Express(.js) — Node.js web framework</li>
<li>3. React(.js) — a client-side JavaScript framework</li>
<li>4. Node(.js) — the premier JavaScript web server</li>
</ol>

Express and Node make up the middle (application) tier. Express.js is a server-side web framework, and Node.js is the popular and powerful JavaScript server platform. Regardless of which variant you choose, ME(RVA)N is the ideal approach to working with JavaScript and JSON, all the way through.</p>
    <p className='mx-auto leading-relaxed text-base mb-4'>MERN is one of several variations of the MEAN stack (MongoDB Express Angular Node), where the traditional Angular.js front-end framework is replaced with React.js. Other variants include MEVN (MongoDB, Express, Vue, Node), and really any front-end JavaScript framework can work.</p>
    </div>

  )
}

export default home