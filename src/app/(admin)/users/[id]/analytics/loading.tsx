import { Skeleton } from "@/components/ui/skeleton"
import Container from "@/components/Container"

export default function UserSettingsLoading() {
  return (
    <Container title="User Analytics">
      <Skeleton className="h-8 w-56" />
    </Container>
  )
}
