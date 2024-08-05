import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="bg-primary py-6 px-4 md:px-6">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary-foreground">Eth Block Explorer</h1>
          <div className="relative w-full max-w-md">
            <Input
              type="search"
              placeholder="Search by block hash or wallet address"
              className="w-full rounded-md bg-primary-foreground px-4 py-2 text-primary focus:outline-none focus:ring-2 focus:ring-primary-foreground"
            />
            <SearchIcon className="absolute right-2 top-1/2 h-5 w-5 -translate-y-1/2 text-primary" />
          </div>
        </div>
      </header>
      <main className="container mx-auto py-8 px-4 md:px-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="bg-card p-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold">Current Block</h2>
                <p className="text-muted-foreground">12345678</p>
              </div>
              <div>
                <h2 className="text-lg font-bold">Eth Price</h2>
                <p className="text-muted-foreground">$1,234.56</p>
              </div>
            </div>
          </Card>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card className="bg-card p-4">
            <div className="mb-4">
              <h2 className="text-lg font-bold">Block Details</h2>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-muted-foreground">Block Hash</p>
                <p>0x123abc...def456</p>
              </div>
              <div>
                <p className="text-muted-foreground">Block Number</p>
                <p>12345678</p>
              </div>
              <div>
                <p className="text-muted-foreground">Parent Hash</p>
                <p>0xabc123...def456</p>
              </div>
              <div>
                <p className="text-muted-foreground">Transactions</p>
                <p>123</p>
              </div>
            </div>
          </Card>
          <Card className="bg-card p-4">
            <div className="mb-4">
              <h2 className="text-lg font-bold">Transactions</h2>
            </div>
            <div className="max-h-[300px] overflow-auto space-y-4">
              <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4">
                <TicketIcon className="h-6 w-6 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">0x123abc...def456</p>
                  <p className="text-xs text-muted-foreground">From: 0xabc123...def456</p>
                </div>
                <p className="text-sm font-medium">0.1 ETH</p>
              </div>
              <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4">
                <TicketIcon className="h-6 w-6 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">0xdef456...abc123</p>
                  <p className="text-xs text-muted-foreground">From: 0xdef456...abc123</p>
                </div>
                <p className="text-sm font-medium">0.05 ETH</p>
              </div>
              <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4">
                <TicketIcon className="h-6 w-6 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">0x456abc...def123</p>
                  <p className="text-xs text-muted-foreground">From: 0x456abc...def123</p>
                </div>
                <p className="text-sm font-medium">0.2 ETH</p>
              </div>
            </div>
          </Card>
        </div>
      </main>
      <footer className="bg-muted py-4 px-4 md:px-6">
        <div className="container mx-auto text-center text-muted-foreground">
          &copy; 2024 Eth Block Explorer. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function TicketIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      <path d="M13 5v2" />
      <path d="M13 17v2" />
      <path d="M13 11v2" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}