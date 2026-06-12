import { lazy, Suspense } from "react";
import Counter from "./Counter";

const CounterApp = lazy(()=> import("./Counter"))

export default function LazyLoading() {
  return (
   <Suspense fallback={<h1>Loading Counter Application...</h1>}>
    <CounterApp/>
   </Suspense>
  );
}