import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex h-screen bg-black">
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <svg
          width="209.886"
          height="209.886"
          viewBox="0 0 209.886 209.886"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-36 h-36 mb-8"
          aria-label="Frozen Custard Logo"
        >
          <path
            d="M156.707,110.122h-0.158c2.344-3.098,3.788-6.912,3.788-11.088v-3.948c0-5.651-2.203-10.551-6.203-13.791    c-1.564-1.266-3.322-2.197-5.216-2.805c1.021-6.884,2.19-21.335-4.626-27.768c-1.237-1.17-2.525-1.943-3.848-2.473    c2.307-25.546-10.434-46.284-20.826-48.108c-4.04-0.722-8.916,1.202-10.538,8.692c-1.734,8.014-7.157,8.819-17.394,9.649    c-5.921,0.484-12.633,1.029-18.516,4.197c-4.191,2.255-6.885,5.582-8.007,9.883c-1.632,6.257,0.639,13.131,2.607,17.467    c-3.605,0.91-6.711,2.399-9.059,4.746c-7.44,7.439-4.008,19.763-1.907,25.307c-0.405,0.302-0.809,0.606-1.191,0.944    c-3.949,3.5-6.125,8.49-6.125,14.061v3.948c0,4.177,1.444,7.99,3.788,11.088h-0.093c-2.04,0-3.695,1.653-3.695,3.695    c0,2.042,1.655,3.695,3.695,3.695h7.894l13.133,89.216c0.267,1.815,1.822,3.157,3.655,3.157h57.787    c1.833,0,3.388-1.342,3.655-3.157l13.133-89.216h4.264c2.04,0,3.695-1.653,3.695-3.695    C160.402,111.774,158.747,110.122,156.707,110.122z M72.314,34.427c0.592-2.266,2.019-3.983,4.361-5.243    c4.519-2.436,10.157-2.894,15.61-3.334c9.865-0.801,21.044-1.707,24.021-15.451c0.462-2.14,1.158-3.132,2.037-2.98    c5.659,0.994,16.826,17.461,14.75,40.162c-2.315,0.327-4.703,0.996-7.142,1.684c-5.337,1.505-11.395,3.201-18.805,2.288    l-4.824-0.621c-9.311-1.208-18.781-2.423-26.865-1.991C73.659,45.584,71.06,39.238,72.314,34.427z M63.937,59.999    c5.849-5.842,22.63-3.662,37.431-1.739l4.86,0.624c8.916,1.118,16.019-0.895,21.729-2.508c6.455-1.826,9.1-2.32,11.262-0.285    c3.739,3.533,3.504,14.195,2.342,21.69c-0.739,0.077-1.485,0.188-2.241,0.349c-0.117,0.029-11.833,2.966-20.097,2.966    c-15.375,0-48.488-4.41-48.864-4.456c-2.356-0.289-4.646-0.151-6.813,0.344C61.97,72.66,59.695,64.241,63.937,59.999z     M81.058,202.494l-3.215-21.845l21.845,21.845H81.058z M110.138,202.495L110.138,202.495l-32.172-32.172    c-0.505-0.505-1.131-0.769-1.779-0.92l-2.809-19.083l52.175,52.175H110.138z M132.917,199.409l-61.343-61.343L68.9,119.904    c0.059,0.068,0.081,0.154,0.146,0.219l65.849,65.849L132.917,199.409z M136.236,176.864l-59.352-59.352h15.415l45.14,45.14    c0.239,0.239,0.53,0.378,0.81,0.538L136.236,176.864z M139.555,154.318l-36.807-36.807h15.415l22.287,22.285    c0.334,0.334,0.724,0.573,1.132,0.752L139.555,154.318z M142.874,131.771l-14.261-14.259h13.26h3.1L142.874,131.771z     M152.947,99.034c0,6.112-4.967,11.088-11.074,11.088h-73.92c-6.107,0-11.074-4.976-11.074-11.088v-3.948    c0-3.424,1.292-6.452,3.635-8.53c1.985-1.757,4.557-2.685,7.341-2.685c0.516,0,1.039,0.033,1.566,0.098    c1.378,0.184,33.934,4.518,49.802,4.518c9.19,0,21.394-3.06,21.769-3.157c3.273-0.693,6.28-0.086,8.49,1.71    c2.235,1.807,3.465,4.665,3.465,8.046V99.034z"
            fill="white"
          />
        </svg>
        <div className="text-center max-w-screen-sm mb-10">
          <h1 className="text-stone-200 font-bold text-3xl mb-4">
            Welcome to Hibbard&apos;s Frozen Custard Tracker
          </h1>
          <p className="text-stone-400 mt-5">
            Indulge in the sweetness of life! Track your favorite flavors, get notified about new arrivals, and never miss a scoop with our email updates.
          </p>
        </div>
        <div className="flex space-x-4 mb-8">
          <Link
            href="/register"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
          >
            Sign Up
          </Link>
          <Link
            href="/login"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
          >
            Log In
          </Link>
        </div>
        <div className="flex space-x-3">
          <Link
            href="/about"
            className="text-stone-400 underline hover:text-stone-200 transition-all"
          >
            About Us
          </Link>
          <p className="text-white">·</p>
          <Link
            href="/flavors"
            className="text-stone-400 underline hover:text-stone-200 transition-all"
          >
            Our Flavors
          </Link>
          <p className="text-white">·</p>
          <a
            href="http://www.hibbardscustard.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-400 underline hover:text-stone-200 transition-all"
          >
            Visit Hibbard&apos;s
          </a>
        </div>
      </div>
    </div>
  );
}
