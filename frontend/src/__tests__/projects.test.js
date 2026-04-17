import projects from '../data/projects.json';

describe('projects.json regression checks', () => {
  test('contains at least one project', () => {
    // Basic smoke check: the data file should export a non-empty array.
    expect(Array.isArray(projects)).toBe(true);
    expect(projects.length).toBeGreaterThan(0);
  });

  test('has unique ids and required fields', () => {
    // IDs are used like stable keys; duplicates can cause rendering/data bugs.
    const ids = projects.map((project) => project.id);
    const uniqueIds = new Set(ids);

    expect(uniqueIds.size).toBe(ids.length);

    projects.forEach((project) => {
      // Contract test: every project object must include this minimum shape.
      expect(project).toEqual(
        expect.objectContaining({
          id: expect.any(Number),
          title: expect.any(String),
          category: expect.any(String),
          description: expect.any(String),
          imageNames: expect.any(Array),
          tags: expect.any(Array),
        }),
      );

      // Content quality checks: required text/list values must not be empty.
      expect(project.title.trim().length).toBeGreaterThan(0);
      expect(project.description.trim().length).toBeGreaterThan(0);
      expect(project.imageNames.length).toBeGreaterThan(0);
      expect(project.tags.length).toBeGreaterThan(0);
    });
  });

  test('uses only supported categories', () => {
    // Keep category values in sync with filtering logic in the UI.
    const allowed = new Set(['software', 'mechanical', 'both']);

    projects.forEach((project) => {
      expect(allowed.has(project.category)).toBe(true);
    });
  });
});
