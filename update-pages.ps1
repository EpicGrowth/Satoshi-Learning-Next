Get-ChildItem -Path "src/app/learn" -Filter "page.tsx" -Recurse | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    if ($content -match "ModuleLayout sidebar=") {
        $newContent = $content -replace '<ModuleLayout sidebar=\{<[^>]+>\}>', '<ModuleLayout>'
        $newContent | Set-Content $_.FullName -NoNewline
        Write-Host "Updated $($_.FullName)"
    }
}
