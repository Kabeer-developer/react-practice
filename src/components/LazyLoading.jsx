import { lazy, Suspense } from "react";

const CounterApp = lazy(()=> import("./Counter"))

export default function LazyLoading() {
return(
   <Suspense fallback={<h1>Counter app is loading...</h1>}>
  <CounterApp/>
 </Suspense>
)
}