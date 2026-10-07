import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";

export default function OpenSourceSection() {
  return (
    <div className="flex flex-col gap-6">
      {DATA.openSource.map((entry) => (
        <div key={entry.project} className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between gap-x-3">
            <Link
              href={entry.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 font-semibold leading-none"
            >
              {entry.project}
              <ArrowUpRight
                className="h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                aria-hidden
              />
            </Link>
            <span className="text-xs tabular-nums text-muted-foreground flex-none">
              {entry.dates}
            </span>
          </div>
          <Badge variant="secondary" className="w-fit text-xs">
            {entry.badge}
          </Badge>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {entry.description}
          </p>
        </div>
      ))}
    </div>
  );
}
