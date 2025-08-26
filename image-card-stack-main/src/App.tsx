import { ImageCardStack } from "./components/features/ImageStack";
import "./index.css"; // make sure custom fonts are imported here

export default function App() {
  return (
    <div className="relative flex flex-col h-screen w-screen items-center justify-center bg-gradient-to-b from-gray-100 to-gray-200">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-10 z-0"></div>

      {/* Tribute Line */}
      <div className="w-[22rem] relative z-10">
        <h2 className="arabic-poem text-1.5xl text-center text-gray-800 font-semibold mb-4">
          إلى من يسكن في أعماقي
        </h2>
        <div className="border-b-2 border-gray-400 w-2/3 mx-auto mb-6"></div>
      </div>

      {/* Card Stack */}
      <div className="relative z-10">
        <ImageCardStack />
      </div>
    </div>
  );
}
