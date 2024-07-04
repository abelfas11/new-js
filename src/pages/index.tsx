import { Inter } from "next/font/google";
import Form from "@/components/form";

const inter = Inter({ subsets: ["latin"] });

fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))

export default function App() {
  return (
    <div className="flex w-full h-screen" > 
      <div className="w-full flex items-center justify-center">
        <Form />
      </div>
      <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-200">
        
      </div>
    </div>

  );
}
