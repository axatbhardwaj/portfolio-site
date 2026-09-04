# src/components/

React UI components. Server components except `nav-link.tsx` and `mermaid.tsx`, which are client components.

## Files

| File               | What                                                | When to read                                   |
| ------------------ | --------------------------------------------------- | ---------------------------------------------- |
| `navbar.tsx`       | Server component: name + text links                 | Adding nav items                               |
| `nav-link.tsx`     | Client child: active-route styling via `usePathname` | Changing active-link behaviour                |
| `footer.tsx`       | Site-wide social/contact links                      | Adding or changing contact links               |
| `section.tsx`      | Labelled home-page section with trailing link       | Adding a home-page section                     |
| `work-list.tsx`    | Work history rows                                   | Changing work row layout                       |
| `project-list.tsx` | Featured project rows (home), one-line description  | Changing featured project row layout           |
| `post-list.tsx`    | Post rows and `formatDate`                          | Changing post row layout or date format        |
| `mermaid.tsx`      | Client-side Mermaid renderer for MDX                | Changing diagram theme                         |
