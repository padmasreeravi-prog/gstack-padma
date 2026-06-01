from pydantic import BaseModel
from typing import List, Optional

# ==========================================
# TAB 1: TECHNICAL PLANNING MODELS (THE ARCHITECT)
# ==========================================
class TechnicalStory(BaseModel):
    title: str
    acceptance_criteria: str  # Must enforce strict Given/When/Then format
    story_points: int         # 1, 2, 3, 5, 8, 13 Fibonacci distribution
    dependencies: List[str]   # Technical dependencies upstream

class ArchitectureBreakdown(BaseModel):
    epics_and_stories: List[TechnicalStory]


# ==========================================
# TAB 2: RISK MANAGEMENT MODELS (THE GATEKEEPER)
# ==========================================
class ProjectRisk(BaseModel):
    description: str
    severity: str             # CRITICAL, HIGH, MEDIUM, LOW
    early_warning_signs: str  # Telemetry indicator metrics to watch
    mitigation_strategy: str  # Actionable remediation vector

class RiskAssessment(BaseModel):
    detected_risks: List[ProjectRisk]


# ==========================================
# TAB 3: EXECUTIVE COMMUNICATIONS MODELS (THE TRANSLATOR)
# ==========================================
class MilestoneStatus(BaseModel):
    name: str
    status: str               # ON TRACK, AT RISK, CRITICAL RED

class ExecutiveBrief(BaseModel):
    bluf: str                 # Bottom Line Up Front methodology
    milestones: List[MilestoneStatus]
    strategic_asks: List[str] # Clear, objective asks for leadership