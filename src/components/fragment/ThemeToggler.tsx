"use client"


import { useEffect, useState } from "react"

export default function ThemeToggler() {

   const [isDark, setIsDark] = useState<boolean>(false)

   function setDefaultTheme() {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
         document.documentElement.classList.add("dark")
         localStorage.setItem('theme', "true")
         setIsDark(true)
     }else{
         document.documentElement.classList.remove("dark")
         localStorage.setItem('theme', "false")
         setIsDark(true)
     }
   }

   function changeTheme(){
      if (window.matchMedia) {
         window.matchMedia(`(prefers-color-scheme: ${isDark ? 'dark' : 'light'})`)
      }
      localStorage.setItem('theme', isDark ? 'dark' : 'light')
      setIsDark(!isDark)
   }


   useEffect(() => {
      setDefaultTheme()
   }, [])

   useEffect(() => {
      if(isDark){
         document.documentElement.classList.add('dark')
      }else{
         document.documentElement.classList.remove('dark')
      }
   }, [isDark])

   return (
      <label 
         htmlFor="theme-toggler" 
         className="relative btn btn-outline cursor-pointer">
         <span className="capitalize select-none">{isDark ? "light" : "dark" }</span>
         <input 
            onChange={changeTheme}
            className="absolute h-full w-full appearance-none inset-0 cursor-pointer"
            type="checkbox" 
            id="theme-toggler" 
            aria-checked={!isDark} 
            defaultChecked={isDark}
            />
      </label>
   )
}