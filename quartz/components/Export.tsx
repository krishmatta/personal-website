import { FullSlug, joinSegments, pathToRoot } from "../util/path"
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

  function Export({ cfg, fileData }: QuartzComponentProps) {
    const exports: ExportData[] = options.fileExports.map(fileExport => {
	const baseDir = joinSegments("..", pathToRoot(fileData.slug))
	const exportDir = joinSegments(baseDir, fileExport)
	const exportPath = joinSegments(exportDir, `${fileData.slug}.${fileExport}`)
	return { displayName: fileExport, path: exportPath }
    })

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