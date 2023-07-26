import { Link } from 'react-router-dom'

const Index = () => {
    return (
        <main>
            <section className="hero min-h-[600px]" style={{backgroundImage: 'https://plus.unsplash.com/premium_photo-1663933534186-e50d9fcef389?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60'}}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Take control of your projects with TaskMaster</h1>
                        <p className="mb-5">Maximize your team&apos;s productivity with an all-in-one project management tool.</p>
                        <Link
                            className='btn btn-primary'
                            to='/register'>Join TaskMaster </Link>
                        <Link
                            className='btn btn-secondary ml-6'
                            to='/tour'>Explore</Link>
                    </div>
                </div>
            </section>
            <section className='max-w-[1200px] mx-auto'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum cum veniam a ullam obcaecati libero, velit iusto voluptatum. Sint fugiat asperiores harum dolores vel nobis porro magnam alias vitae similique.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum cum veniam a ullam obcaecati libero, velit iusto voluptatum. Sint fugiat asperiores harum dolores vel nobis porro magnam alias vitae similique.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum cum veniam a ullam obcaecati libero, velit iusto voluptatum. Sint fugiat asperiores harum dolores vel nobis porro magnam alias vitae similique.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum cum veniam a ullam obcaecati libero, velit iusto voluptatum. Sint fugiat asperiores harum dolores vel nobis porro magnam alias vitae similique.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum cum veniam a ullam obcaecati libero, velit iusto voluptatum. Sint fugiat asperiores harum dolores vel nobis porro magnam alias vitae similique.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum cum veniam a ullam obcaecati libero, velit iusto voluptatum. Sint fugiat asperiores harum dolores vel nobis porro magnam alias vitae similique.
            </section>
        </main>
    )
}

export default Index
