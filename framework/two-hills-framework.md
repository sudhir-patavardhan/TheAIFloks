# The Two Hills of AI: Automation vs. Invention

*Canonical framework doc. Source: original LinkedIn post (see `original-linkedin-post.pdf`). This is the lens applied to every domain in `domains/`.*

## Core thesis

Most enterprise AI strategy is framed around productivity: automate an existing manual process, count the hours saved. Real value — but **productivity gains from AI automation are table stakes**. If you can automate a process with AI, so can your competitor, usually by buying the same tools. Efficiency everyone can purchase is not a differentiator; it's the new baseline.

The more interesting question: **what can AI let us do that was previously impossible?**

**Invention subsumes automation. The reverse is not true.** The invention path, done right, delivers the productivity gains anyway — as a byproduct.

## The 2x2

- **X-axis — Scope of impact:** individual → institutional
- **Y-axis — Nature of use:** automating existing processes → inventing new capabilities

| | Individual | Institutional |
|---|---|---|
| **Invent** | **Individual Invention** — brilliant one-off tools built by your best people. Genuine innovation, but it dies when the builder moves on. | **Institutional Capability** — new abilities embedded in how the organization itself works. Compounding. Hard to copy. **Where durable value lives. Finish here.** |
| **Automate** | **Personal Productivity** — copilots, prompt-assisted work. Valuable, but it walks out the door with each employee. **Start here.** | **Process Automation at Scale** — automated organizational workflows. Real savings, replicable by anyone with a budget. Efficiency everyone can buy is the new baseline. |

Every AI journey starts in the bottom half — that's where the quick wins are. Durable value lives in one quadrant only: **institutional capability**.

> Personal productivity is a fine place to start. Institutional value is the only place worth finishing.

## The reference case (enterprise quality engineering)

Reimagining end-to-end UI test automation at scale:

- **Obvious path (automation):** AI generates test scripts from natural language. Legitimate productivity win — but real-world usage showed generated scripts couldn't keep pace with application change. Same constraints, faster output.
- **Different question:** where should the intelligence live? Answer: in understanding the *intent* of a use case and figuring out execution the way a human tester would — not in generating scripts.
- **Result (invention):** a platform that reasons about user intent rather than producing fixed scripts. Building for capability rather than a specific tool meant it covered multiple platforms and device types. It scales to a very large number of use cases and keeps its own tests current as the product evolves. Productivity gains followed as a byproduct.

## The diagnostic question

For every AI initiative on a roadmap:

> **Is this automating something we already do — or inventing something we couldn't do before?**

Both are legitimate. Only one compounds.

---

# Applying the framework to a new domain (rubric)

For each domain, work through these five steps. Outputs land in the domain's `02-analysis/two-hills-map.md`.

## 1. Map current investment

Where is the money and attention actually going? For each major initiative/vendor category, classify into a quadrant. Expected finding in most domains: heavy concentration in the bottom half (copilots + process automation). That concentration *is* the story — it's evidence of a commoditizing baseline.

## 2. Identify the binding constraints

What has always made the domain's hard problems hard? (Examples of constraint types: cost of expert attention doesn't scale; unstructured data was unreadable at scale; combinatorial search spaces too large; feedback loops too slow; coordination costs across silos.)

## 3. Test the constraint against AI

For each "unsolvable" problem: does AI remove the *actual* binding constraint, or just accelerate work within it? (The test-script trap: producing output faster while the fundamental constraint remains = automation dressed as invention.)

## 4. Find the institutional-capability formulation

Ask "where should the intelligence live?" — usually the answer is upstream of where the automation tools sit. What new ability could be embedded in how organizations in this domain *work*, such that it compounds and is hard to copy?

## 5. Falsification check

What evidence would prove this domain is an exception — i.e., that automation *is* the moat here? Actively look for it. Record the outcome either way.

## Anti-patterns to catch (in others' initiatives and our own analysis)

- **Faster output, same constraint** — the script-generation trap.
- **Tool worship** — building for a specific tool instead of a capability.
- **Purchased differentiation** — claiming moats from vendor products competitors can also buy.
- **Individual invention mistaken for institutional capability** — genius one-offs that die with the builder.
