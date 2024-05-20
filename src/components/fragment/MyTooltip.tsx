import {
   Tooltip,
   TooltipContent,
   TooltipProvider,
   TooltipTrigger,
 } from "@/components/ui/tooltip"

interface TooltipProps {
   children : React.ReactNode;
   text: string;
}
 
 export default function MyTooltip( props: TooltipProps) {
   return (
      <TooltipProvider>
         <Tooltip>
            <TooltipTrigger>
               <div className="btn btn-ghost" title={props.text}>
                  {props.children}
               </div>
            </TooltipTrigger>
            <TooltipContent>
               <p className="capitalize">{props.text}</p>
            </TooltipContent>
         </Tooltip>
      </TooltipProvider>

   )
 }