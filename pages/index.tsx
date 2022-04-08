import Image from 'next/image'
import bgHome from '../public/img1.jpg'


const Home = () => {
  return (
    <section className="w-full h-screen bg-dunes bg-cover bg-center relative">
      <Image src={bgHome} className='z-[-1] object-cover md:h-full md:w-48 ' alt='background home image' />
      <div className='absolute w-128 h-1/3 top-1/2 left-1/2 p-6 bg-black/90 rounded-lg text-center transform -translate-x-1/2 -translate-y-1/2 z-[1000]' >
        <p className='text-xl	text-white text-center	'>
          Verifique seus projetos de construção através da Check PLUS, e ganhe mais assertividade nas submissões a prefeitura!
          Preencha os dados no link ao abaixo e aumente sua eficiência!
        </p>
        <a href={'https://forms.gle/n21zyeabdfgpicem7'} target='_blank' className="mt-10 text-white bg-orange-500 hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0">
          Solicitar análise
        </a>
      </div>
    </section>
  )
}

export default Home
