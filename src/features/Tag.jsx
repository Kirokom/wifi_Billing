export default function Tag({name}){
    const names = name ||  "Dashboard" 
    return(
        <div className="">
          <div className="relative">
              <div className="absolute rounded-xl -left-3  top-[50%] text-gray-600 font-bold -translate-y-1/2">
                 <i class="fa-solid fa-caret-left"></i>
              </div>
            <div className="flex MainCOlor border  px-[7px] py-[3px]">
                <div className="  font-bold text-sm w-18 wrap-break-word text-bold">{names}</div>
            </div>
          </div>
        </div>
    )
}