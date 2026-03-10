/**
 * Custom window events for bidirectional project ↔ skill navigation.
 *
 * Because Astro renders each `client:load` component as a separate React root,
 * we use the native window event bus for cross-island communication.
 */

export const SKILL_HIGHLIGHT_EVENT = 'skill:highlight';
export const PROJECT_HIGHLIGHT_EVENT = 'project:highlight';

export interface SkillHighlightDetail {
  skillId: string;
}

export interface ProjectHighlightDetail {
  projectId: string;
}

/** Dispatch from a project card when the user clicks a tech badge. */
export function emitSkillHighlight(skillId: string) {
  window.dispatchEvent(
    new CustomEvent<SkillHighlightDetail>(SKILL_HIGHLIGHT_EVENT, {
      detail: { skillId },
    })
  );
}

/** Dispatch from a skill card when the user clicks a related project name. */
export function emitProjectHighlight(projectId: string) {
  window.dispatchEvent(
    new CustomEvent<ProjectHighlightDetail>(PROJECT_HIGHLIGHT_EVENT, {
      detail: { projectId },
    })
  );
}

/** Scroll to a section by its `id` attribute with smooth behaviour. */
export function scrollToSection(sectionId: string) {
  const el = document.getElementById(sectionId);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
