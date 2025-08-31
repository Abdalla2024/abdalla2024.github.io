import * as React from "react"
import { createPortal } from "react-dom"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"

interface SheetProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
}

interface SheetContentProps {
  side?: "top" | "right" | "bottom" | "left"
  className?: string
  children: React.ReactNode
}

interface SheetTriggerProps {
  asChild?: boolean
  className?: string
  children: React.ReactNode
}

const SheetContext = React.createContext<{
  open: boolean
  setOpen: (open: boolean) => void
}>({
  open: false,
  setOpen: () => {},
})

const Portal: React.FC<{ children: React.ReactNode }> = ({ children }) =>
  typeof window !== "undefined" ? createPortal(children, document.body) : null

const Sheet = ({ open = false, onOpenChange, children }: SheetProps) => {
  const [internalOpen, setInternalOpen] = React.useState(open)
  
  const setOpen = React.useCallback((newOpen: boolean) => {
    setInternalOpen(newOpen)
    onOpenChange?.(newOpen)
  }, [onOpenChange])

  React.useEffect(() => {
    setInternalOpen(open)
  }, [open])

  return (
    <SheetContext.Provider value={{ open: internalOpen, setOpen }}>
      {children}
    </SheetContext.Provider>
  )
}

const SheetTrigger = React.forwardRef<
  HTMLButtonElement,
  SheetTriggerProps & React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ asChild = false, className, children, ...props }, ref) => {
  const { setOpen } = React.useContext(SheetContext)
  
  const handleClick = () => {
    setOpen(true)
  }

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      ...(children.props as any),
      onClick: handleClick,
    })
  }

  return (
    <button
      ref={ref}
      className={className}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  )
})
SheetTrigger.displayName = "SheetTrigger"

const SheetContent = React.forwardRef<HTMLDivElement, SheetContentProps>(
  ({ side = "right", className, children }, ref) => {
    const { open, setOpen } = React.useContext(SheetContext)



    if (!open) return null

    const sideClasses = {
      top: "top-0 left-0 right-0 h-auto border-b",
      right: "top-0 right-0 h-auto w-80 border-l",
      bottom: "bottom-0 left-0 right-0 h-auto border-t",
      left: "top-0 left-0 h-auto w-80 border-r",
    }

    return (
      <Portal>
        {/* Overlay */}
        <div
          className="fixed inset-0 z-[9998] bg-transparent"
          onClick={() => setOpen(false)}
        />
        
        {/* Sheet */}
        <div
          ref={ref}
          className={cn(
            "fixed z-[9999] gap-4 bg-white p-6 shadow-xl transition ease-in-out border border-gray-200",
            sideClasses[side],
            className
          )}
        >
          <button
            onClick={() => setOpen(false)}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
          {children}
        </div>
      </Portal>
    )
  }
)
SheetContent.displayName = "SheetContent"

export { Sheet, SheetTrigger, SheetContent }
