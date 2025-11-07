import { FilePath, FullSlug, joinSegments, pathToRoot } from "../util/path"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

type ExportData = {
  displayName: string
  path: string
}

interface ExportOptions {
  fileExports: string[]
}

const defaultOptions: ExportOptions = {
  fileExports: ["pdf"],
}

export default ((opts?: Partial<ExportOptions>) => {
  // Merge options with defaults
  const options: ExportOptions = { ...defaultOptions, ...opts }

  function Export({ ctx, fileData }: QuartzComponentProps) {
    const slug = fileData.slug as FullSlug | undefined
    if (!slug) {
      return null
    }

    const availableFiles = new Set<FilePath>(ctx.allFiles)

    const exports: ExportData[] = options.fileExports.flatMap((fileExport) => {
      const relativeExportFile = joinSegments(fileExport, `${slug}.${fileExport}`)

      if (!availableFiles.has(relativeExportFile as FilePath)) {
        return []
      }

      const baseDir = joinSegments("..", pathToRoot(slug))
      const exportDir = joinSegments(baseDir, fileExport)
      const exportPath = joinSegments(exportDir, `${slug}.${fileExport}`)

      return [{ displayName: fileExport, path: exportPath }]
    })

    if (exports.length === 0) {
      return null
    }

    return (
      <div class="export">
        {exports.map(({ displayName, path }, index) => (
          <span>
            <a href={path}>{displayName}</a>
            {index < exports.length - 1 ? " | " : ""}
          </span>
        ))}
      </div>
    )
  }

  return Export
}) satisfies QuartzComponentConstructor